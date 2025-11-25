"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comentario = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios/usuario.entity");
const lugar_entity_1 = require("../lugares/lugar.entity");
let Comentario = class Comentario {
    id;
    usuario;
    lugar;
    texto;
    fecha;
};
exports.Comentario = Comentario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comentario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.id, { onDelete: 'CASCADE' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Comentario.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lugar_entity_1.Lugar, lugar => lugar.comentarios, { onDelete: 'CASCADE' }),
    __metadata("design:type", lugar_entity_1.Lugar)
], Comentario.prototype, "lugar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Comentario.prototype, "texto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Comentario.prototype, "fecha", void 0);
exports.Comentario = Comentario = __decorate([
    (0, typeorm_1.Entity)('comentarios')
], Comentario);
//# sourceMappingURL=comentario.entity.js.map