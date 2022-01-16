import { Response } from "express";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController{
    constructor(private listCategoryService: ListCategoryService){}

    handle( response: Response){
        
        const categoryList = this.listCategoryService.execute();
    
        response.status(200).json(categoryList);
    }

} export { ListCategoryController };

