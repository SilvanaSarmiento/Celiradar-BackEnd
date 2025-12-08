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
exports.Lugar = void 0;
const typeorm_1 = require("typeorm");
const imagen_entity_1 = require("../imagenes/imagen.entity");
const categoria_entity_1 = require("../categorias/categoria.entity");
const comentario_entity_1 = require("../comentarios/comentario.entity");
const favorito_entity_1 = require("../favoritos/favorito.entity");
let Lugar = class Lugar {
    id;
    nombre;
    tipo;
    direccion;
    lat;
    lng;
    imagen;
    categoria_id;
    imagenes;
    categoria;
    comentarios;
    favoritos;
};
exports.Lugar = Lugar;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lugar.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Lugar.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lugar.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Lugar.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 7 }),
    __metadata("design:type", Number)
], Lugar.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 7 }),
    __metadata("design:type", Number)
], Lugar.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lugar.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Lugar.prototype, "categoria_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => imagen_entity_1.Imagen, imagen => imagen.lugar),
    __metadata("design:type", Array)
], Lugar.prototype, "imagenes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_entity_1.Categoria, categoria => categoria.lugares, { eager: false }),
    __metadata("design:type", Array)
], Lugar.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comentario_entity_1.Comentario, comentario => comentario.lugar),
    __metadata("design:type", Array)
], Lugar.prototype, "comentarios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorito_entity_1.Favorito, favorito => favorito.lugar),
    __metadata("design:type", Array)
], Lugar.prototype, "favoritos", void 0);
exports.Lugar = Lugar = __decorate([
    (0, typeorm_1.Entity)('lugares')
], Lugar);
//# sourceMappingURL=lugar.entity.js.map