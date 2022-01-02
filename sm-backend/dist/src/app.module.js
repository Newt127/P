"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const db_departamento_module_1 = require("./db-departamento/db-departamento.module");
const db_trabajador_module_1 = require("./db-trabajador/db-trabajador.module");
const db_trabajador_entity_1 = require("./db-trabajador/db-trabajador.entity");
const db_supermercado_module_1 = require("./db-supermercado/db-supermercado.module");
const db_encargado_module_1 = require("./db-encargado/db-encargado.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'encargado',
                password: 'encargado',
                database: 'superm',
                entities: [__dirname + '/**/*.entity{.ts,.js}', db_trabajador_entity_1.TrabajadorEntity],
                synchronize: true,
            }),
            db_departamento_module_1.DbDepartamentoModule,
            db_trabajador_module_1.DbTrabajadorModule,
            db_supermercado_module_1.DbSupermercadoModule,
            db_encargado_module_1.DbEncargadoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map