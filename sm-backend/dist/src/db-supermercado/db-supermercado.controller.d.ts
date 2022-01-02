import { DbSupermercadoService } from './db-supermercado.service';
import { SupermercadoDto } from './dto/db-supermercado.dto';
export declare class DbSupermercadoController {
    private readonly SupermercadoService;
    constructor(SupermercadoService: DbSupermercadoService);
    getAll(): Promise<import("./db-supermercado.entity").SupermercadoEntity[]>;
    getOne(id: number): Promise<import("./db-supermercado.entity").SupermercadoEntity>;
    create(dto: SupermercadoDto): Promise<any>;
}
