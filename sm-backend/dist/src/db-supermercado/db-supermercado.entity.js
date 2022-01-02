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
exports.SupermercadoEntity = void 0;
const db_encargado_entity_1 = require("../db-encargado/db-encargado.entity");
const typeorm_1 = require("typeorm");
let SupermercadoEntity = class SupermercadoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SupermercadoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: false }),
    __metadata("design:type", Number)
], SupermercadoEntity.prototype, "codigopostal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "colonia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "razonsocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false, unique: true }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "correoelectronico", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], SupermercadoEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => db_encargado_entity_1.EncargadoEntity, encargado => encargado.superm),
    __metadata("design:type", db_encargado_entity_1.EncargadoEntity)
], SupermercadoEntity.prototype, "encargado", void 0);
SupermercadoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'supermercado' })
], SupermercadoEntity);
exports.SupermercadoEntity = SupermercadoEntity;
//# sourceMappingURL=db-supermercado.entity.js.map