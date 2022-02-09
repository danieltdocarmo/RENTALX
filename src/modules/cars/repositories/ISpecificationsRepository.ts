import { Specification } from "../infra/typeorm/entities/Specification";


interface IDTOCreateSpecificationRepository{
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    findByName(name: string): Promise<Specification>;
    list():Promise<Specification[]>;
    create(data:IDTOCreateSpecificationRepository):Promise<Specification>;
    findByIds(specifications_ids:string[]):Promise<Specification[]>;
}

export {ISpecificationsRepository, IDTOCreateSpecificationRepository};