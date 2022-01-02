import { EncargadoEntity } from './db-encargado.entity';
import { EncargadoRepository } from './db-encargado.repository';
import { EncargadoDto } from './dto/db-encargado.dto';
export declare class DbEncargadoService {
    private encargadorepository;
    constructor(encargadorepository: EncargadoRepository);
    getAll(): Promise<EncargadoEntity[]>;
    findById(id: number): Promise<EncargadoEntity>;
    findByNombre(nombre: string): Promise<EncargadoEntity>;
    create(dto: EncargadoDto): Promise<any>;
    update(id: number, dto: EncargadoDto): Promise<any>;
}
