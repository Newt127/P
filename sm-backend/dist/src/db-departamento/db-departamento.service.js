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
exports.DbDepartamentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const db_departamento_entity_1 = require("./db-departamento.entity");
const db_departamento_repository_1 = require("./db-departamento.repository");
let DbDepartamentoService = class DbDepartamentoService {
    constructor(departamentorepository) {
        this.departamentorepository = departamentorepository;
    }
    async getAll() {
        const list = await this.departamentorepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('lista esta vacia'));
        }
        return list;
    }
    async findById(id) {
        const elemento = await this.departamentorepository.findOne(id);
        if (!elemento) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('No existe'));
        }
        return elemento;
    }
    async findByNombre(nombre) {
        const elemento = await this.departamentorepository.findOne({ nombre: nombre });
        return elemento;
    }
    async create(dto) {
        const exists = await this.findByNombre(dto.nombre);
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese nombre ya existe'));
        const elemento = this.departamentorepository.create(dto);
        await this.departamentorepository.save(elemento);
        return new message_dto_1.MessageDto(`Departamento ${elemento.nombre} creado`);
    }
    async delete(id) {
        const elemento = await this.findById(id);
        await this.departamentorepository.delete(elemento);
        return new message_dto_1.MessageDto(`Departamento ${elemento.nombre} borrado`);
    }
};
DbDepartamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_departamento_entity_1.DepartamentoEntity)),
    __metadata("design:paramtypes", [db_departamento_repository_1.DepartamentoRepository])
], DbDepartamentoService);
exports.DbDepartamentoService = DbDepartamentoService;
//# sourceMappingURL=db-departamento.service.js.map