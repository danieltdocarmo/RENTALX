import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../Repository/Implementations/ICategoriesRepository";
import { CategoriesRepositoryInMemory } from "../../Repository/InMemory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "./CreateCategoryService";

let categoriesRepositoryInMemory: ICategoriesRepository;
let createCategoryService: CreateCategoryService;

beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryService = new CreateCategoryService(categoriesRepositoryInMemory);
});

describe("Create Category", () => {
    it("Should be able to create a new Category", async () => {
        const category = {
            name: 'SUV',
            description: 'Im bigger then you'
        }

        await createCategoryService.execute(category);

        const findedCategory = await categoriesRepositoryInMemory.findByName(category.name);

        expect(findedCategory).toHaveProperty('id');
    })
});

describe("Create Category",  () => {
    it("Should not be able to create a new Category if name already exists", async () => {
      
        expect(async ()=>{
            const category = {
                name: 'SUV',
                description: 'Im bigger then you'
            }
            
            await createCategoryService.execute(category);
            await createCategoryService.execute(category);
            
        }).rejects.toBeInstanceOf(AppError);
    })
});