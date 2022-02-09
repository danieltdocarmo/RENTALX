import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationService{
    constructor(
        @inject('SpecificationRepository')
        private specificationRepository: ISpecificationsRepository
        ){}

    async execute({name, description}: IRequest):Promise<Specification>{
        const findedSpecification = await this.specificationRepository.findByName(name);
    
    if(findedSpecification){
        throw new AppError(409, 'Specification already exists');
    }
    
    const specification = await this.specificationRepository.create({name, description});
    
    return specification;
    
}
    
}

export { CreateSpecificationService };