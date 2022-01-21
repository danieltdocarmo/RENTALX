import { ISpecificationsRepository } from "../../Repository/Implementations/ISpecificationsRepository";



interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationsRepository){}

    async execute({name, description}: IRequest){
        const findedSpecification = await this.specificationRepository.findByName(name);
    
    if(findedSpecification){
        throw new Error('Specification already exists');
    }
    
    await this.specificationRepository.create({name, description});
    }
    
}

export { CreateSpecificationService };