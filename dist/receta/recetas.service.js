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
exports.RecetasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const receta_entity_1 = require("./receta.entity");
let RecetasService = class RecetasService {
    recetaRepo;
    constructor(recetaRepo) {
        this.recetaRepo = recetaRepo;
    }
    findAll() {
        return this.recetaRepo.find({ relations: ['usuario'] });
    }
    async findOne(id) {
        const receta = await this.recetaRepo.findOne({
            where: { id_receta: id },
            relations: ['usuario'],
        });
        if (!receta)
            throw new common_1.NotFoundException(`Receta ${id} no encontrada`);
        return receta;
    }
    create(data) {
        const nueva = this.recetaRepo.create(data);
        return this.recetaRepo.save(nueva);
    }
    async update(id, data) {
        const receta = await this.recetaRepo.findOne({ where: { id_receta: id } });
        if (!receta)
            throw new common_1.NotFoundException(`Receta ${id} no encontrada`);
        const merged = this.recetaRepo.merge(receta, data);
        return this.recetaRepo.save(merged);
    }
    async remove(id) {
        const receta = await this.recetaRepo.findOne({ where: { id_receta: id } });
        if (!receta)
            throw new common_1.NotFoundException(`Receta ${id} no encontrada`);
        await this.recetaRepo.remove(receta);
        return { message: 'Receta eliminada' };
    }
};
exports.RecetasService = RecetasService;
exports.RecetasService = RecetasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(receta_entity_1.Receta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecetasService);
//# sourceMappingURL=recetas.service.js.map