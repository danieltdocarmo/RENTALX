import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportFileService } from "./ImportFileService";

class ImportFileController{

    async handle(request: Request, response: Response){
        const { file } = request;
        
        const importFileService = container.resolve(ImportFileService);

        await importFileService.execute(file);
        
       return response.status(200).json(file);
    }
    
} export {ImportFileController};