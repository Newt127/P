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
exports.EncargadoDto = void 0;
const is_not_blank_decorator_1 = require("../../decorators/is-not-blank.decorator");
class EncargadoDto {
}
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el nombre del supermercado no puede estar vacio' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "nombre", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el apellido paterno no puede estar vacio' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "apellidoP", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el apellido materno no puede estar vacio' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "apellidoM", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'la fecha no puede estar vacia' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "fecha", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el genero no puede estar vacio' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "genero", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el correo electronico no puede estar vacio' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "correoelectronico", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el telefono no puede estar vacio' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "telefono", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'la contraseña no puede estar vacia' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "contrasena", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'la confirmación de la contraseña no puede estar vacia' }),
    __metadata("design:type", String)
], EncargadoDto.prototype, "contrasenaValid", void 0);
exports.EncargadoDto = EncargadoDto;
//# sourceMappingURL=db-encargado.dto.js.map