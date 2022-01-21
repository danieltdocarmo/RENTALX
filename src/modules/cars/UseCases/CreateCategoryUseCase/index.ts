import { CategoriesRepository } from "../../Repository/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

export default (): CreateCategoryController => {
    const categoryRepository = new CategoriesRepository();
    const createCategoryService = new CreateCategoryService(categoryRepository);
    return new CreateCategoryController(createCategoryService);
}