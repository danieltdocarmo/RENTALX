import { ImportFileController } from "./ImportFileController";
import { ImportFileService } from "./ImportFileService";

const importFileService = new ImportFileService();
const importFileController = new ImportFileController(importFileService);

export {importFileController}; 