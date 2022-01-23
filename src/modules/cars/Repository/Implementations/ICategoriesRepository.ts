import { Category } from "../../entities/Category";

interface IDTOCreateCategoriesRepository{
    name: string;
    description: string;
}

interface ICategoriesRepository{
    findByName(name: string): Promise<Category>;
    list():Promise<Category[]>;
    create(data:IDTOCreateCategoriesRepository):void;
}

export {ICategoriesRepository, IDTOCreateCategoriesRepository};