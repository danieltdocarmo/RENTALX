import { ISpecificationsRepository } from "../../Repository/Implementations/ISpecificationsRepository";



interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationsRepository){}

    execute({name, description}: IRequest){
        const findedSpecification = this.specificationRepository.findByName(name);
    
    if(findedSpecification){
        throw new Error('Category already exists');
    }
    this.specificationRepository.create({name, description});
    }
    
}

export { CreateSpecificationService };