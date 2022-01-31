import { inject, injectable } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/Category";
import { CategoriesRepository } from "../../infra/typeorm/Repository/CategoriesRepository";

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