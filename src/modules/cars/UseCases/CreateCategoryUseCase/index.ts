import { CategoryRepository } from "../../Repository/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const categoryRepository = CategoryRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export {createCategoryController};