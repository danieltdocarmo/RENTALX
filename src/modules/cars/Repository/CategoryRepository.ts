import { Category } from "../model/Category";
import { ICategoryRepository, IDTOCreateCategoryRepository } from "./Implementations/ICategoryRepository";


class CategoryRepository implements ICategoryRepository{
    private categories: Category[];

    private static INSTANCE:CategoryRepository;

    private constructor(){
        this.categories = [];
    }

    public static getInstance(){
        if(!CategoryRepository.INSTANCE){
            return CategoryRepository.INSTANCE = new CategoryRepository();
        }else{
            return CategoryRepository.INSTANCE;
        }
    }

    findByName(name:string):Category{
        const findedCategory = this.categories.find(category => category.name === name);
        return findedCategory;
    }

    create({name, description}: IDTOCreateCategoryRepository): void{
      
        const category = new Category();
        Object.assign(category, {
        name,
        description
    });

    this.categories.push(category)
    }

    list(): Category[]{
        return this.categories;
    }
}

export {CategoryRepository};