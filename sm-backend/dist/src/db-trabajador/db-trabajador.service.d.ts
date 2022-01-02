import { TrabajadorEntity } from './db-trabajador.entity';
import { TrabajadorRepository } from './db-trabajador.repository';
import { TrabajadorDto } from './dto/db-trabajador.dto';
export declare class DbTrabajadorService {
    private trabajadorrepository;
    constructor(trabajadorrepository: TrabajadorRepository);
    getAll(): Promise<TrabajadorEntity[]>;
    findById(id: number): Promise<TrabajadorEntity>;
    findByNombre(nombre: string): Promise<TrabajadorEntity>;
    create(dto: TrabajadorDto): Promise<any>;
    update(id: number, dto: TrabajadorDto): Promise<any>;
    delete(id: number): Promise<any>;
}
