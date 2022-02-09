import { Specification } from "../../infra/typeorm/entities/Specification";
import { IDTOCreateSpecificationRepository, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository{
    private repository: Specification[];

    constructor(){
        this.repository = [];
    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.find(specification => specification.name === name);
    }
    
    async list(): Promise<Specification[]> {
        return this.repository;
    }

    async create(data: IDTOCreateSpecificationRepository): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, data);

        this.repository.push(specification);

        return specification;
    }

    async findByIds(specifications_ids: string[]): Promise<Specification[]> {
        
        const allSpecifications = this.repository.filter(
            specification => specifications_ids.includes(specification.id));
        return allSpecifications; 
    }
    
} export { SpecificationsRepositoryInMemory }