import { Specification } from "../../entities/Specification";



interface IDTOCreateSpecificationRepository{
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    findByName(name: string): Promise<Specification>;
    list():Promise<Specification[]>;
    create(data:IDTOCreateSpecificationRepository):Promise<void>;
}

export {ISpecificationsRepository, IDTOCreateSpecificationRepository};