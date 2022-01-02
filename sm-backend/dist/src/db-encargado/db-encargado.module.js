"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbEncargadoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const db_encargado_service_1 = require("./db-encargado.service");
const db_encargado_controller_1 = require("./db-encargado.controller");
const db_encargado_entity_1 = require("./db-encargado.entity");
let DbEncargadoModule = class DbEncargadoModule {
};
DbEncargadoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([db_encargado_entity_1.EncargadoEntity])],
        providers: [db_encargado_service_1.DbEncargadoService],
        controllers: [db_encargado_controller_1.DbEncargadoController]
    })
], DbEncargadoModule);
exports.DbEncargadoModule = DbEncargadoModule;
//# sourceMappingURL=db-encargado.module.js.map