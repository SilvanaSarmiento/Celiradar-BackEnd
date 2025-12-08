"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsejosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const consejo_entity_1 = require("./consejo.entity");
const consejos_service_1 = require("./consejos.service");
const consejos_controller_1 = require("./consejos.controller");
let ConsejosModule = class ConsejosModule {
};
exports.ConsejosModule = ConsejosModule;
exports.ConsejosModule = ConsejosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([consejo_entity_1.Consejo])],
        providers: [consejos_service_1.ConsejosService],
        controllers: [consejos_controller_1.ConsejosController],
        exports: [consejos_service_1.ConsejosService],
    })
], ConsejosModule);
//# sourceMappingURL=consejos.module.js.map