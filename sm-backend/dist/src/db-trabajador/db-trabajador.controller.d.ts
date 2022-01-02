import { TrabajadorDto } from './dto/db-trabajador.dto';
import { DbTrabajadorService } from './db-trabajador.service';
export declare class DbTrabajadorController {
    private readonly trabajadorService;
    constructor(trabajadorService: DbTrabajadorService);
    getAll(): Promise<import("./db-trabajador.entity").TrabajadorEntity[]>;
    getOne(id: number): Promise<import("./db-trabajador.entity").TrabajadorEntity>;
    create(dto: TrabajadorDto): Promise<any>;
    update(id: number, dto: TrabajadorDto): Promise<any>;
    delete(id: number): Promise<any>;
}
