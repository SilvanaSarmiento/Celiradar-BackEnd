const express = require('express');
const cors = require('cors');
const db = require('./config/db');

// === AUTH DEPENDENCIAS ===
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ==== CONFIG JWT ====
const JWT_SECRET = process.env.JWT_SECRET || "mi_secreto_local_123";
const JWT_EXPIRES_IN = "7d";

/* =====================
   MIDDLEWARES
===================== */

// Verificar token JWT
function verificarToken(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;

  if (!token) return res.status(401).json({ error: "Token no enviado" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token inválido" });

    req.usuario = decoded; 
    next();
  });
}

// Requiere usuario suscriptor
function requiereSuscriptor(req, res, next) {
  if (!req.usuario) return res.status(401).json({ error: "No autenticado" });

  if (!req.usuario.es_suscriptor)
    return res.status(403).json({ error: "Necesitas suscripción activa" });

  next();
}

/* =====================
   AUTH: REGISTRO
===================== */

app.post(
  "/auth/register",
  body("nombre").isLength({ min: 1 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { nombre, email, password } = req.body;

    db.query("SELECT id FROM usuarios WHERE email = ?", [email], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length > 0)
        return res.status(400).json({ error: "El email ya está registrado" });

      bcrypt.hash(password, 10, (errHash, hashed) => {
        if (errHash) return res.status(500).json({ error: errHash.message });

        db.query(
          "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
          [nombre, email, hashed],
          (err2, result) => {
            if (err2) return res.status(500).json({ error: err2.message });

            res.json({ mensaje: "Usuario registrado con éxito" });
          }
        );
      });
    });
  }
);

/* =====================
   AUTH: LOGIN
===================== */

app.post(
  "/auth/login",
  body("email").isEmail(),
  body("password").isLength({ min: 1 }),

  (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(400).json({ error: "Usuario o contraseña incorrectos" });

      const usuario = results[0];

      bcrypt.compare(password, usuario.password, (errCmp, igual) => {
        if (!igual)
          return res.status(400).json({ error: "Usuario o contraseña incorrectos" });

        const payload = {
          id: usuario.id,
          nombre: usuario.nombre,
          es_suscriptor: Number(usuario.es_suscriptor) === 1 ? 1 : 0,
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        res.json({
          token,
          usuario: {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            es_suscriptor: payload.es_suscriptor,
          },
        });
      });
    });
  }
);

/* =====================
   ACTIVAR SUSCRIPCIÓN
===================== */
app.post("/api/usuarios/:id/suscribirse", verificarToken, (req, res) => {
  const usuarioId = Number(req.params.id);

  if (req.usuario.id !== usuarioId)
    return res.status(403).json({ error: "No autorizado" });

  db.query(
    "UPDATE usuarios SET es_suscriptor = 1 WHERE id = ?",
    [usuarioId],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({ mensaje: "Suscripción activada" });
    }
  );
});

/* =====================
   LUGARES
===================== */

// Traer todos los lugares con sus imágenes
app.get('/api/lugares', (req, res) => {
  db.query('SELECT * FROM lugares', (err, lugares) => {
    if (err) return res.status(500).json({ error: err.message });

    if (lugares.length === 0) return res.json([]);

    let count = 0;
    const lugaresConImagenes = [];

    lugares.forEach((lugar) => {
      db.query(
        'SELECT id, ruta_imagen FROM imagenes_lugares WHERE lugarId = ?',
        [lugar.id],
        (err2, imagenes) => {
          if (err2) return res.status(500).json({ error: err2.message });

          lugar.imagenes = imagenes;
          lugaresConImagenes.push(lugar);

          count++;
          if (count === lugares.length) {
            res.json(lugaresConImagenes);
          }
        }
      );
    });
  });
});

/* =====================
   IMÁGENES DE LUGARES
===================== */

app.get('/api/lugares/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM lugares WHERE id = ?', [id], (err, lugares) => {
    if (err) return res.status(500).json({ error: err.message });
    if (lugares.length === 0) return res.status(404).json({ error: 'Lugar no encontrado' });

    const lugar = lugares[0];

    db.query('SELECT id, ruta_imagen FROM imagenes_lugares WHERE lugarId = ?', [id], (err2, imagenes) => {
      if (err2) return res.status(500).json({ error: err2.message });

      lugar.imagenes = imagenes;
      res.json(lugar);
    });
  });
});

/* =====================
   COMENTARIOS
===================== */

// Traer comentarios
app.get('/api/lugares/:id/comentarios', (req, res) => {
  const lugarId = req.params.id;
  db.query(
    `SELECT c.id, c.texto, c.fecha, u.nombre AS usuario
     FROM comentarios c
     LEFT JOIN usuarios u ON c.usuarioId = u.id
     WHERE c.lugarId = ?`,
    [lugarId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

// Crear comentario
app.post('/api/lugares/:id/comentarios', (req, res) => {
  const lugarId = req.params.id;
  const { usuarioId, texto } = req.body;

  db.query(
    'INSERT INTO comentarios (lugarId, usuarioId, texto, fecha) VALUES (?, ?, ?, NOW())',
    [lugarId, usuarioId, texto],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({
        id: result.insertId,
        lugarId,
        usuarioId,
        texto,
        fecha: new Date()
      });
    }
  );
});

/* =====================
   FAVORITOS
===================== */

// Traer favoritos
app.get('/api/usuarios/:id/favoritos', (req, res) => {
  const usuarioId = req.params.id;

  db.query(
    `SELECT l.*
     FROM lugares_guardados lg
     JOIN lugares l ON lg.lugar_id = l.id
     WHERE lg.usuario_id = ?`,
    [usuarioId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

// Agregar favorito
app.post('/api/usuarios/:id/favoritos', (req, res) => {
  const usuarioId = req.params.id;
  const { lugar_id } = req.body;

  db.query(
    'INSERT INTO lugares_guardados (usuario_id, lugar_id) VALUES (?, ?)',
    [usuarioId, lugar_id],
    (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY')
          return res.status(400).json({ error: 'Ya guardado' });

        return res.status(500).json({ error: err.message });
      }
      res.json({ id: result.insertId, usuario_id: usuarioId, lugar_id });
    }
  );
});

/* =====================
   SERVIDOR
===================== */

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
