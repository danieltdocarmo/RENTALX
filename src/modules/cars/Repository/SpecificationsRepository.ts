import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../errors/AppError";
import { Specification } from "../entities/Specification";
import { IDTOCreateSpecificationRepository, ISpecificationsRepository } from "./Implementations/ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{
    
    private specificationsRepository: Repository<Specification>
    
    constructor(){
       this.specificationsRepository = getRepository(Specification);
    }

    async findByName(name:string):Promise<Specification>{
        const findedSpecification = await this.specificationsRepository.findOne({name});

        return findedSpecification;
    }

    async create({name, description}: IDTOCreateSpecificationRepository): Promise<void>{
        const findedSpecification = await this.specificationsRepository.findOne({name});
        
        if(findedSpecification){
            throw new AppError(409, 'Specification already exists');
        }

        const specification = this.specificationsRepository.create({name, description});

        await this.specificationsRepository.save(specification);
    }

    async list(): Promise<Specification[]>{
        return await this.specificationsRepository.find();
    }

}

export {SpecificationsRepository};
