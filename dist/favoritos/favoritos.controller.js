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
exports.FavoritosController = void 0;
const common_1 = require("@nestjs/common");
const favoritos_service_1 = require("./favoritos.service");
let FavoritosController = class FavoritosController {
    favoritosService;
    constructor(favoritosService) {
        this.favoritosService = favoritosService;
    }
    findAll() {
        return this.favoritosService.findAll();
    }
    findByUsuario(id) {
        return this.favoritosService.findByUsuario(Number(id));
    }
    create(data) {
        return this.favoritosService.create(data);
    }
    delete(id) {
        return this.favoritosService.delete(Number(id));
    }
};
exports.FavoritosController = FavoritosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('usuario/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoritosController.prototype, "delete", null);
exports.FavoritosController = FavoritosController = __decorate([
    (0, common_1.Controller)('favoritos'),
    __metadata("design:paramtypes", [favoritos_service_1.FavoritosService])
], FavoritosController);
//# sourceMappingURL=favoritos.controller.js.map