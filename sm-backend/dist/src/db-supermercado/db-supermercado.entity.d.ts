import { EncargadoEntity } from "src/db-encargado/db-encargado.entity";
export declare class SupermercadoEntity {
    id: number;
    nombre: string;
    calle: string;
    numero: string;
    codigopostal: number;
    colonia: string;
    estado: string;
    ciudad: string;
    razonsocial: string;
    correoelectronico: string;
    telefono: string;
    encargado: EncargadoEntity;
}
