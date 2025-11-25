const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* =====================
   LUGARES
===================== */
// Traer todos los lugares
app.get('/api/lugares', (req, res) => {
  db.query('SELECT * FROM lugares', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Traer un lugar por ID
app.get('/api/lugares/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM lugares WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Lugar no encontrado' });
    res.json(results[0]);
  });
});

/* =====================
   IMÁGENES DE LUGARES
===================== */
// Traer imágenes de un lugar
app.get('/api/lugares/:id/imagenes', (req, res) => {
  const lugarId = req.params.id;
  db.query('SELECT imagen FROM imagenes_lugares WHERE lugar_id = ?', [lugarId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

/* =====================
   COMENTARIOS
===================== */
// Traer comentarios de un lugar
app.get('/api/lugares/:id/comentarios', (req, res) => {
  const lugarId = req.params.id;
  db.query(
    `SELECT c.id, c.comentario, c.calificacion, c.fecha_creacion, u.nombre AS usuario 
     FROM comentarios c
     JOIN usuarios u ON c.usuario_id = u.id
     WHERE c.lugar_id = ?`, 
    [lugarId], 
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

// Agregar comentario
app.post('/api/lugares/:id/comentarios', (req, res) => {
  const lugarId = req.params.id;
  const { usuario_id, comentario, calificacion } = req.body;

  db.query(
    'INSERT INTO comentarios (lugar_id, usuario_id, comentario, calificacion) VALUES (?, ?, ?, ?)',
    [lugarId, usuario_id, comentario, calificacion],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, lugar_id: lugarId, usuario_id, comentario, calificacion });
    }
  );
});

/* =====================
   LUGARES GUARDADOS / FAVORITOS
===================== */
// Traer lugares guardados de un usuario
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

// Agregar lugar a favoritos
app.post('/api/usuarios/:id/favoritos', (req, res) => {
  const usuarioId = req.params.id;
  const { lugar_id } = req.body;

  db.query(
    'INSERT INTO lugares_guardados (usuario_id, lugar_id) VALUES (?, ?)',
    [usuarioId, lugar_id],
    (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ error: 'Ya guardado' });
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: result.insertId, usuario_id: usuarioId, lugar_id });
    }
  );
});

/* =====================
   SERVIDOR
===================== */
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

