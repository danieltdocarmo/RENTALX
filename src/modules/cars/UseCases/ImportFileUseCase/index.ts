import { CategoryRepository } from "../../Repository/CategoriesRepository";
import { ImportFileController } from "./ImportFileController";
import { ImportFileService } from "./ImportFileService";

const categoryRepository = CategoryRepository.getInstance();
const importFileService = new ImportFileService(categoryRepository);
const importFileController = new ImportFileController(importFileService);

export {importFileController}; 