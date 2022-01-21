import { Request, Response } from "express";
import { ImportFileService } from "./ImportFileService";

class ImportFileController{
    constructor(private importFileService: ImportFileService){}

    async handle(request: Request, response: Response){
        const { file } = request;
        
        await this.importFileService.execute(file);
        response.status(200).json(file);
    }
    
} export {ImportFileController};