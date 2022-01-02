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
exports.TrabajadorDto = void 0;
const is_not_blank_decorator_1 = require("../../decorators/is-not-blank.decorator");
class TrabajadorDto {
}
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el id del empleado no puede estar vacío' }),
    __metadata("design:type", String)
], TrabajadorDto.prototype, "idTrab", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'si el empleado no tiene departamento, coloque N/A' }),
    __metadata("design:type", String)
], TrabajadorDto.prototype, "departamento", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el nombre del empleado no puede estar vacio' }),
    __metadata("design:type", String)
], TrabajadorDto.prototype, "nombre", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'el apellido del empleado no puede estar vacio' }),
    __metadata("design:type", String)
], TrabajadorDto.prototype, "apellidos", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'Los dias laborales no pueden estar vacios' }),
    __metadata("design:type", Array)
], TrabajadorDto.prototype, "diasLaborales", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'El telefono no puede estar vacio' }),
    __metadata("design:type", String)
], TrabajadorDto.prototype, "telefono", void 0);
exports.TrabajadorDto = TrabajadorDto;
//# sourceMappingURL=db-trabajador.dto.js.map