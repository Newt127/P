import { SupermercadoEntity } from './db-supermercado.entity';
import { SupermercadoRepository } from './db-supermercado.repository';
import { SupermercadoDto } from './dto/db-supermercado.dto';
export declare class DbSupermercadoService {
    private supermercadorepository;
    constructor(supermercadorepository: SupermercadoRepository);
    getAll(): Promise<SupermercadoEntity[]>;
    findById(id: number): Promise<SupermercadoEntity>;
    findByNombre(nombre: string): Promise<SupermercadoEntity>;
    create(dto: SupermercadoDto): Promise<any>;
}
