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
exports.DbTrabajadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const db_trabajador_entity_1 = require("./db-trabajador.entity");
const db_trabajador_repository_1 = require("./db-trabajador.repository");
let DbTrabajadorService = class DbTrabajadorService {
    constructor(trabajadorrepository) {
        this.trabajadorrepository = trabajadorrepository;
    }
    async getAll() {
        const list = await this.trabajadorrepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('lista esta vacia'));
        }
        return list;
    }
    async findById(id) {
        const elemento = await this.trabajadorrepository.findOne(id);
        if (!elemento) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('No existe'));
        }
        return elemento;
    }
    async findByNombre(nombre) {
        const producto = await this.trabajadorrepository.findOne({ nombre: nombre });
        return producto;
    }
    async create(dto) {
        const exists = await this.findByNombre(dto.nombre);
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese nombre ya existe'));
        const elemento = this.trabajadorrepository.create(dto);
        await this.trabajadorrepository.save(elemento);
        return new message_dto_1.MessageDto(`Trabajador ${elemento.nombre} creado`);
    }
    async update(id, dto) {
        const elemento = await this.findById(id);
        if (!elemento)
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('No existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id)
            throw new common_1.BadRequestException({ message: 'ese nombre ya existe' });
        dto.idTrab ? elemento.idTrab = dto.idTrab : elemento.idTrab = elemento.idTrab;
        dto.departamento ? elemento.departamento = dto.departamento : elemento.departamento = elemento.departamento;
        dto.nombre ? elemento.nombre = dto.nombre : elemento.nombre = elemento.nombre;
        dto.apellidos ? elemento.apellidos = dto.apellidos : elemento.apellidos = elemento.apellidos;
        dto.diasLaborales ? elemento.diasLaborales = dto.diasLaborales : elemento.diasLaborales = elemento.diasLaborales;
        dto.telefono ? elemento.telefono = dto.telefono : elemento.telefono = elemento.telefono;
        await this.trabajadorrepository.save(elemento);
        return new message_dto_1.MessageDto(`Trabajador ${elemento.nombre} actualizado`);
    }
    async delete(id) {
        const elemento = await this.findById(id);
        await this.trabajadorrepository.delete(elemento);
        return new message_dto_1.MessageDto(`Trabajador ${elemento.nombre} borrado`);
    }
};
DbTrabajadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_trabajador_entity_1.TrabajadorEntity)),
    __metadata("design:paramtypes", [db_trabajador_repository_1.TrabajadorRepository])
], DbTrabajadorService);
exports.DbTrabajadorService = DbTrabajadorService;
//# sourceMappingURL=db-trabajador.service.js.map