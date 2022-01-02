"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbTrabajadorModule = void 0;
const common_1 = require("@nestjs/common");
const db_trabajador_service_1 = require("./db-trabajador.service");
const db_trabajador_controller_1 = require("./db-trabajador.controller");
const typeorm_1 = require("@nestjs/typeorm");
const db_trabajador_entity_1 = require("./db-trabajador.entity");
let DbTrabajadorModule = class DbTrabajadorModule {
};
DbTrabajadorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([db_trabajador_entity_1.TrabajadorEntity])],
        providers: [db_trabajador_service_1.DbTrabajadorService],
        controllers: [db_trabajador_controller_1.DbTrabajadorController]
    })
], DbTrabajadorModule);
exports.DbTrabajadorModule = DbTrabajadorModule;
//# sourceMappingURL=db-trabajador.module.js.map