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
exports.DbEncargadoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const db_encargado_entity_1 = require("./db-encargado.entity");
const db_encargado_repository_1 = require("./db-encargado.repository");
let DbEncargadoService = class DbEncargadoService {
    constructor(encargadorepository) {
        this.encargadorepository = encargadorepository;
    }
    async getAll() {
        const list = await this.encargadorepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('lista esta vacia'));
        }
        return list;
    }
    async findById(id) {
        const elemento = await this.encargadorepository.findOne(id);
        if (!elemento) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('No existe'));
        }
        return elemento;
    }
    async findByNombre(nombre) {
        const producto = await this.encargadorepository.findOne({ nombre: nombre });
        return producto;
    }
    async create(dto) {
        const exists = await this.findByNombre(dto.correoelectronico);
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese correo electronico de encargado ya existe'));
        const elemento = this.encargadorepository.create(dto);
        await this.encargadorepository.save(elemento);
        return new message_dto_1.MessageDto(`Encargado ${elemento.nombre} creado`);
    }
    async update(id, dto) {
        const elemento = await this.findById(id);
        if (!elemento)
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('No existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id)
            throw new common_1.BadRequestException({ message: 'ese nombre ya existe' });
        dto.id ? elemento.id = dto.id : elemento.id = elemento.id;
        dto.nombre ? elemento.nombre = dto.nombre : elemento.nombre = elemento.nombre;
        dto.apellidoP ? elemento.apellidoP = dto.apellidoP : elemento.apellidoP = elemento.apellidoP;
        dto.apellidoM ? elemento.apellidoM = dto.apellidoM : elemento.apellidoM = elemento.apellidoM;
        dto.fecha ? elemento.fecha = dto.fecha : elemento.fecha = elemento.fecha;
        dto.genero ? elemento.genero = dto.genero : elemento.genero = elemento.genero;
        dto.correoelectronico ? elemento.correoelectronico = dto.correoelectronico : elemento.correoelectronico = elemento.correoelectronico;
        dto.telefono ? elemento.telefono = dto.telefono : elemento.telefono = elemento.telefono;
        dto.contrasena ? elemento.contrasena = dto.contrasena : elemento.contrasena = elemento.contrasena;
        dto.contrasenaValid ? elemento.contrasenaValid = dto.contrasenaValid : elemento.contrasenaValid = elemento.contrasenaValid;
        dto.nombreC ? elemento.nombreC = dto.nombreC : elemento.nombreC = elemento.nombreC;
        await this.encargadorepository.save(elemento);
        return new message_dto_1.MessageDto(`Encargado ${elemento.nombre} actualizado`);
    }
};
DbEncargadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_encargado_entity_1.EncargadoEntity)),
    __metadata("design:paramtypes", [db_encargado_repository_1.EncargadoRepository])
], DbEncargadoService);
exports.DbEncargadoService = DbEncargadoService;
//# sourceMappingURL=db-encargado.service.js.map