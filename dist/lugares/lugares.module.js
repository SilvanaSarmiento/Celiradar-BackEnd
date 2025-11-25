"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LugaresModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lugar_entity_1 = require("./lugar.entity");
const lugares_service_1 = require("./lugares.service");
const lugares_controller_1 = require("./lugares.controller");
let LugaresModule = class LugaresModule {
};
exports.LugaresModule = LugaresModule;
exports.LugaresModule = LugaresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lugar_entity_1.Lugar])],
        providers: [lugares_service_1.LugaresService],
        controllers: [lugares_controller_1.LugaresController],
        exports: [typeorm_1.TypeOrmModule]
    })
], LugaresModule);
//# sourceMappingURL=lugares.module.js.map