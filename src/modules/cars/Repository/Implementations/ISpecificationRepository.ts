import { Specification } from "../../model/Specification";



interface IDTOCreateSpecificationRepository{
    name: string;
    description: string;
}

interface ISpecificationRepository{
    findByName(name: string): Specification;
    list():Specification[];
    create(data:IDTOCreateSpecificationRepository):void;
}

export {ISpecificationRepository, IDTOCreateSpecificationRepository};