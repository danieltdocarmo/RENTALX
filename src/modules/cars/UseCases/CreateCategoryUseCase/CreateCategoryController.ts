import {Request, Response} from 'express';
import {CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController{
    constructor(private createCategoryService: CreateCategoryService){
    }

    async handle(request:Request, response:Response ){
        const {name, description} = request.body;
        
        await this.createCategoryService.execute({name, description});
    
        response.status(201).send();
    }

}  export {CreateCategoryController};