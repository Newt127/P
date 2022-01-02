"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDepartamentoModule = void 0;
const common_1 = require("@nestjs/common");
const db_departamento_service_1 = require("./db-departamento.service");
const db_departamento_controller_1 = require("./db-departamento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const db_departamento_entity_1 = require("./db-departamento.entity");
let DbDepartamentoModule = class DbDepartamentoModule {
};
DbDepartamentoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([db_departamento_entity_1.DepartamentoEntity])],
        providers: [db_departamento_service_1.DbDepartamentoService],
        controllers: [db_departamento_controller_1.DbDepartamentoController]
    })
], DbDepartamentoModule);
exports.DbDepartamentoModule = DbDepartamentoModule;
//# sourceMappingURL=db-departamento.module.js.map