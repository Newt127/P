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
exports.SupermercadoDto = void 0;
const class_validator_1 = require("class-validator");
const is_not_blank_decorator_1 = require("../../decorators/is-not-blank.decorator");
class SupermercadoDto {
}
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el nombre del supermercado no puede estar vacio' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "nombre", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'la calle no puede estar vacia' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "calle", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el numero no puede estar vacio' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'el codigo postal no puede estar vacio' }),
    __metadata("design:type", Number)
], SupermercadoDto.prototype, "codigopostal", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'la colonia no puede estar vacia' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "colonia", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el estado no puede estar vacio' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "estado", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'la ciudad no puede estar vacia' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "ciudad", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'la razon social no puede estar vacio' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "razonsocial", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el correo electronico no puede estar vacio' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "correoelectronico", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el telefono no puede estar vacio' }),
    __metadata("design:type", String)
], SupermercadoDto.prototype, "telefono", void 0);
exports.SupermercadoDto = SupermercadoDto;
//# sourceMappingURL=db-supermercado.dto.js.map