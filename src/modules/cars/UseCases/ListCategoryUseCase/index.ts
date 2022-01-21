import { CategoriesRepository } from "../../Repository/CategoriesRepository";
import { ListCategoryService } from "./ListCategoryService";
import { ListCategoryController } from './ListCategoryController';

const categoryRepository =  null //new CategoriesRepository();
const listCategoryService = new ListCategoryService(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export {listCategoryController};