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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comentario_entity_1 = require("./comentario.entity");
let ComentariosService = class ComentariosService {
    comentariosRepo;
    constructor(comentariosRepo) {
        this.comentariosRepo = comentariosRepo;
    }
    findAll() {
        return this.comentariosRepo.find({
            relations: ['usuario', 'lugar'],
        });
    }
    findByLugar(lugarId) {
        return this.comentariosRepo.find({
            where: { lugar: { id: lugarId } },
            relations: ['usuario', 'lugar'],
        });
    }
    findOne(id) {
        return this.comentariosRepo.findOne({
            where: { id },
            relations: ['usuario', 'lugar'],
        });
    }
    async create(data) {
        const nuevoComentario = this.comentariosRepo.create({
            ...data,
            fecha: new Date(),
        });
        return this.comentariosRepo.save(nuevoComentario);
    }
    async update(id, data) {
        const comentario = await this.comentariosRepo.findOne({ where: { id } });
        if (!comentario) {
            throw new common_1.NotFoundException('El comentario no existe');
        }
        Object.assign(comentario, data);
        return this.comentariosRepo.save(comentario);
    }
    async delete(id) {
        const comentario = await this.comentariosRepo.findOne({ where: { id } });
        if (!comentario) {
            throw new common_1.NotFoundException('El comentario no existe');
        }
        return this.comentariosRepo.remove(comentario);
    }
};
exports.ComentariosService = ComentariosService;
exports.ComentariosService = ComentariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comentario_entity_1.Comentario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ComentariosService);
//# sourceMappingURL=comentarios.service.js.map