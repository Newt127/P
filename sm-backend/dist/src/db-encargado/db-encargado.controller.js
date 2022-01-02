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
exports.DbEncargadoController = void 0;
const common_1 = require("@nestjs/common");
const db_encargado_dto_1 = require("./dto/db-encargado.dto");
const db_encargado_service_1 = require("./db-encargado.service");
let DbEncargadoController = class DbEncargadoController {
    constructor(encargadoService) {
        this.encargadoService = encargadoService;
    }
    async getAll() {
        return await this.encargadoService.getAll();
    }
    async getOne(id) {
        return await this.encargadoService.findById(id);
    }
    async create(dto) {
        return await this.encargadoService.create(dto);
    }
    async update(id, dto) {
        return await this.encargadoService.update(id, dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DbEncargadoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DbEncargadoController.prototype, "getOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [db_encargado_dto_1.EncargadoDto]),
    __metadata("design:returntype", Promise)
], DbEncargadoController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, db_encargado_dto_1.EncargadoDto]),
    __metadata("design:returntype", Promise)
], DbEncargadoController.prototype, "update", null);
DbEncargadoController = __decorate([
    (0, common_1.Controller)('db-encargado'),
    __metadata("design:paramtypes", [db_encargado_service_1.DbEncargadoService])
], DbEncargadoController);
exports.DbEncargadoController = DbEncargadoController;
//# sourceMappingURL=db-encargado.controller.js.map