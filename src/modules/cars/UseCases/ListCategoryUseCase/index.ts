import { CategoryRepository } from "../../Repository/CategoryRepository";
import { ListCategoryService } from "./ListCategoryService";
import { ListCategoryController } from './ListCategoryController';

const categoryRepository =  CategoryRepository.getInstance();
const listCategoryService = new ListCategoryService(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export {listCategoryController};