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
exports.DbSupermercadoController = void 0;
const common_1 = require("@nestjs/common");
const db_supermercado_service_1 = require("./db-supermercado.service");
const db_supermercado_dto_1 = require("./dto/db-supermercado.dto");
let DbSupermercadoController = class DbSupermercadoController {
    constructor(SupermercadoService) {
        this.SupermercadoService = SupermercadoService;
    }
    async getAll() {
        return await this.SupermercadoService.getAll();
    }
    async getOne(id) {
        return await this.SupermercadoService.findById(id);
    }
    async create(dto) {
        return await this.SupermercadoService.create(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DbSupermercadoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DbSupermercadoController.prototype, "getOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [db_supermercado_dto_1.SupermercadoDto]),
    __metadata("design:returntype", Promise)
], DbSupermercadoController.prototype, "create", null);
DbSupermercadoController = __decorate([
    (0, common_1.Controller)('db-supermercado'),
    __metadata("design:paramtypes", [db_supermercado_service_1.DbSupermercadoService])
], DbSupermercadoController);
exports.DbSupermercadoController = DbSupermercadoController;
//# sourceMappingURL=db-supermercado.controller.js.map