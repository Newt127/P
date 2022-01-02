import { DbDepartamentoService } from './db-departamento.service';
import { DepartamentoDto } from './dto/db-departamento.dto';
export declare class DbDepartamentoController {
    private readonly departamentoService;
    constructor(departamentoService: DbDepartamentoService);
    getAll(): Promise<import("./db-departamento.entity").DepartamentoEntity[]>;
    getOne(id: number): Promise<import("./db-departamento.entity").DepartamentoEntity>;
    create(dto: DepartamentoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
