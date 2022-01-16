import { ISpecificationRepository } from "../../Repository/Implementations/ISpecificationRepository";



interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest){
        const findedSpecification = this.specificationRepository.findByName(name);
    
    if(findedSpecification){
        throw new Error('Category already exists');
    }
    this.specificationRepository.create({name, description});
    }
    
}

export { CreateSpecificationService };