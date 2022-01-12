import {Router} from 'express';
import { CreateCategoryService } from '../modules/cars/ services/CreateCategoryService';
import { CategoryRepository } from '../modules/cars/Repository/CategoryRepository';




const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();
const createCategoryService = new CreateCategoryService(categoryRepository);

categoriesRouter.post('/', (request, response) => {
    const {name, description} = request.body;

    createCategoryService.execute({name, description});

    response.status(201).send();

});

categoriesRouter.get('/', (request, response) => {
    
    const categoryList = categoryRepository.list();
    
    response.status(200).json(categoryList);

});



export {categoriesRouter};