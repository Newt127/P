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
exports.DbDepartamentoController = void 0;
const common_1 = require("@nestjs/common");
const db_departamento_service_1 = require("./db-departamento.service");
const db_departamento_dto_1 = require("./dto/db-departamento.dto");
let DbDepartamentoController = class DbDepartamentoController {
    constructor(departamentoService) {
        this.departamentoService = departamentoService;
    }
    async getAll() {
        return await this.departamentoService.getAll();
    }
    async getOne(id) {
        return await this.departamentoService.findById(id);
    }
    async create(dto) {
        return await this.departamentoService.create(dto);
    }
    async delete(id) {
        return await this.departamentoService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DbDepartamentoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DbDepartamentoController.prototype, "getOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [db_departamento_dto_1.DepartamentoDto]),
    __metadata("design:returntype", Promise)
], DbDepartamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DbDepartamentoController.prototype, "delete", null);
DbDepartamentoController = __decorate([
    (0, common_1.Controller)('db-departamento'),
    __metadata("design:paramtypes", [db_departamento_service_1.DbDepartamentoService])
], DbDepartamentoController);
exports.DbDepartamentoController = DbDepartamentoController;
//# sourceMappingURL=db-departamento.controller.js.map