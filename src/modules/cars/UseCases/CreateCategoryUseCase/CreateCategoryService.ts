import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../Repository/Implementations/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateCategoryService{
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository
        ){}

 async execute({name, description}: IRequest){
        const findedCategory = await this.categoriesRepository.findByName(name);
    
    if(findedCategory){
        throw new Error('Category already exists');
    }
    this.categoriesRepository.create({name, description});
    }
    
}

export { CreateCategoryService };