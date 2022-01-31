import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { Category } from "../entities/Category";
import { ICategoriesRepository, IDTOCreateCategoriesRepository } from "../../../repositories/ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository{
    
    private categoriesRepository: Repository<Category> 
    
    constructor(){
        this.categoriesRepository = getRepository(Category);
    }

   async findByName(name:string):Promise<Category>{
        const findedCategory = await this.categoriesRepository.findOne({name});
        return findedCategory;
    }

    async create({name, description}: IDTOCreateCategoriesRepository): Promise<void>{
        const findedCategory = await this.findByName(name);
        
        if(findedCategory){
            throw new AppError(403, 'Category already exists!');
        }

        const category = this.categoriesRepository.create({name, description});

        await this.categoriesRepository.save(category);
    }

   async list(): Promise<Category[]>{
        return this.categoriesRepository.find();
    }
}

export {CategoriesRepository};