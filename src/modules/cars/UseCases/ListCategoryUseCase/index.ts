import { CategoriesRepository } from "../../Repository/CategoriesRepository";
import { ListCategoryService } from "./ListCategoryService";
import { ListCategoryController } from './ListCategoryController';

export default (): ListCategoryController => {
    const categoryRepository =  new CategoriesRepository();
    const listCategoryService = new ListCategoryService(categoryRepository);
    return new ListCategoryController(listCategoryService);


}