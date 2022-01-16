import { Specification } from "../model/Specification";
import { IDTOCreateSpecificationRepository, ISpecificationRepository } from "./Implementations/ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository{
    
    private specifications: Specification[];
    
    constructor(){
        this.specifications = [];
    }

    findByName(name:string):Specification{
        const findedSpecification = this.specifications.find(specification => specification.name === name);

        return findedSpecification;
    }

    create({name, description}: IDTOCreateSpecificationRepository): void{
      
        const specification = new Specification();
        Object.assign(specification, {
        name,
        description
    });

    this.specifications.push(specification)
    }

    list(): Specification[]{
        return this.specifications;
    }

}

export {SpecificationRepository};