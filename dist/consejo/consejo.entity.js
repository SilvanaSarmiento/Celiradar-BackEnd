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
exports.Consejo = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let Consejo = class Consejo {
    id_consejo;
    titulo;
    texto;
    usuario;
};
exports.Consejo = Consejo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Consejo.prototype, "id_consejo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Consejo.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Consejo.prototype, "texto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.consejos, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Consejo.prototype, "usuario", void 0);
exports.Consejo = Consejo = __decorate([
    (0, typeorm_1.Entity)()
], Consejo);
//# sourceMappingURL=consejo.entity.js.map