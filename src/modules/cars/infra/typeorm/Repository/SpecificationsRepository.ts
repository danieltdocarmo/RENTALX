import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { ISpecificationsRepository, IDTOCreateSpecificationRepository } from "../../../repositories/ISpecificationsRepository";
import { Specification } from "../entities/Specification";


class SpecificationsRepository implements ISpecificationsRepository{
    
    private specificationsRepository: Repository<Specification>
    
    constructor(){
       this.specificationsRepository = getRepository(Specification);
    }
    
    async findByName(name:string):Promise<Specification>{
        const findedSpecification = await this.specificationsRepository.findOne({name});

        return findedSpecification;
    }

    async create({name, description}: IDTOCreateSpecificationRepository): Promise<Specification>{
        const findedSpecification = await this.specificationsRepository.findOne({name});
        
        if(findedSpecification){
            throw new AppError(409, 'Specification already exists');
        }

        const specification = this.specificationsRepository.create({name, description});

        const savedSpecification = await this.specificationsRepository.save(specification);

        return savedSpecification;
    }

    async list(): Promise<Specification[]>{
        return await this.specificationsRepository.find();
    }

    async findByIds(specifications_ids: string[]): Promise<Specification[]> {
       return await this.specificationsRepository.findByIds(specifications_ids);
    }

}

export {SpecificationsRepository};
