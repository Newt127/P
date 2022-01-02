import { SupermercadoEntity } from "src/db-supermercado/db-supermercado.entity";
export declare class EncargadoDto {
    id?: number;
    nombre?: string;
    apellidoP?: string;
    apellidoM?: string;
    fecha: string;
    genero?: string;
    correoelectronico?: string;
    telefono?: string;
    contrasena?: string;
    contrasenaValid?: string;
    nombreC?: string;
    superm?: SupermercadoEntity;
}
