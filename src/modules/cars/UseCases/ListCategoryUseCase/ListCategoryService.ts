import { Category } from "../../model/Category";
import { CategoryRepository } from "../../Repository/CategoriesRepository";

class ListCategoryService{
    constructor(private categoryRepository: CategoryRepository){}

    execute(): Category[] {
        return this.categoryRepository.list();
    }
} export { ListCategoryService };