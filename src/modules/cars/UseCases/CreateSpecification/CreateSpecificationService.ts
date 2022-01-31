import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
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

    async execute({name, description}: IRequest){
        const findedSpecification = await this.specificationRepository.findByName(name);
    
    if(findedSpecification){
        throw new AppError(409, 'Specification already exists');
    }
    
    await this.specificationRepository.create({name, description});
    }
    
}

export { CreateSpecificationService };