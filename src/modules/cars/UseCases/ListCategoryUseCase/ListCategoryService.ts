import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../Repository/CategoriesRepository";

class ListCategoryService{
    constructor(private categoriesRepository: CategoriesRepository){}

    async execute(): Promise<Category[]> {
        return await this.categoriesRepository.list();
    }
} export { ListCategoryService };