import { EncargadoDto } from './dto/db-encargado.dto';
import { DbEncargadoService } from './db-encargado.service';
export declare class DbEncargadoController {
    private readonly encargadoService;
    constructor(encargadoService: DbEncargadoService);
    getAll(): Promise<import("./db-encargado.entity").EncargadoEntity[]>;
    getOne(id: number): Promise<import("./db-encargado.entity").EncargadoEntity>;
    create(dto: EncargadoDto): Promise<any>;
    update(id: number, dto: EncargadoDto): Promise<any>;
}
