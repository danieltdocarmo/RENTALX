import { CategoriesRepository } from "../../Repository/CategoriesRepository";
import { ImportFileController } from "./ImportFileController";
import { ImportFileService } from "./ImportFileService";

const categoryRepository = null //new CategoriesRepository();
const importFileService = new ImportFileService(categoryRepository);
const importFileController = new ImportFileController(importFileService);

export {importFileController}; 