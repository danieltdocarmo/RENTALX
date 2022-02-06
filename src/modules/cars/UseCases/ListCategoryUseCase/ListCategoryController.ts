import { Response, Request } from "express";
import { container } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/Category";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController{
    
    async handle( request:Request, response: Response):Promise<Response>{
        
        const listCategoryService = container.resolve(ListCategoryService);
        
        const categoryList = await listCategoryService.execute();
    
        return response.status(200).json(categoryList);
    }

} export { ListCategoryController };

