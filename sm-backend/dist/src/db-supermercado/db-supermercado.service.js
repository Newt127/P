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
exports.DbSupermercadoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const db_supermercado_entity_1 = require("./db-supermercado.entity");
const db_supermercado_repository_1 = require("./db-supermercado.repository");
let DbSupermercadoService = class DbSupermercadoService {
    constructor(supermercadorepository) {
        this.supermercadorepository = supermercadorepository;
    }
    async getAll() {
        const list = await this.supermercadorepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('lista esta vacia'));
        }
        return list;
    }
    async findById(id) {
        const elemento = await this.supermercadorepository.findOne({
            where: { id: id },
            relations: ['encargado']
        });
        if (!elemento) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('No existe'));
        }
        console.log(elemento);
        return elemento;
    }
    async findByNombre(nombre) {
        const sm = await this.supermercadorepository.findOne({ nombre: nombre });
        return sm;
    }
    async create(dto) {
        const exists = await this.findByNombre(dto.correoelectronico);
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese correo electronico de supermercado ya existe'));
        const sm = this.supermercadorepository.create(dto);
        await this.supermercadorepository.save(sm);
        return new message_dto_1.MessageDto(`Supermercado ${sm.nombre} creado`);
    }
};
DbSupermercadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_supermercado_entity_1.SupermercadoEntity)),
    __metadata("design:paramtypes", [db_supermercado_repository_1.SupermercadoRepository])
], DbSupermercadoService);
exports.DbSupermercadoService = DbSupermercadoService;
//# sourceMappingURL=db-supermercado.service.js.map