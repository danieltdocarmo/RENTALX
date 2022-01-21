import { CategoriesRepository } from "../../Repository/CategoriesRepository";
import { ImportFileController } from "./ImportFileController";
import { ImportFileService } from "./ImportFileService";


export default ():ImportFileController => {
    const categoryRepository = new CategoriesRepository();
    const importFileService = new ImportFileService(categoryRepository);
    return new ImportFileController(importFileService);
}