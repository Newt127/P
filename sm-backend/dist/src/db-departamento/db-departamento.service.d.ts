import { DepartamentoEntity } from './db-departamento.entity';
import { DepartamentoRepository } from './db-departamento.repository';
import { DepartamentoDto } from './dto/db-departamento.dto';
export declare class DbDepartamentoService {
    private departamentorepository;
    constructor(departamentorepository: DepartamentoRepository);
    getAll(): Promise<DepartamentoEntity[]>;
    findById(id: number): Promise<DepartamentoEntity>;
    findByNombre(nombre: string): Promise<DepartamentoEntity>;
    create(dto: DepartamentoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
