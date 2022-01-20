import { Category } from "../../entities/Category";

interface IDTOCreateCategoryRepository{
    name: string;
    description: string;
}

interface ICategoryRepository{
    findByName(name: string): Promise<Category>;
    list():Promise<Category[]>;
    create(data:IDTOCreateCategoryRepository):void;
}

export {ICategoryRepository, IDTOCreateCategoryRepository};