import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../Repository/CategoriesRepository";

@injectable()
class ListCategoryService{
    constructor(
        @inject('CategoriesRepository')    
        private categoriesRepository: CategoriesRepository
    ){}

    async execute(): Promise<Category[]> {
        return await this.categoriesRepository.list();
    }
    
} export { ListCategoryService };