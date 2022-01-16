import { Category } from "../../model/Category";

interface IDTOCreateCategoryRepository{
    name: string;
    description: string;
}

interface ICategoryRepository{
    findByName(name: string): Category;
    list():Category[];
    create(data:IDTOCreateCategoryRepository):void;
}

export {ICategoryRepository, IDTOCreateCategoryRepository};