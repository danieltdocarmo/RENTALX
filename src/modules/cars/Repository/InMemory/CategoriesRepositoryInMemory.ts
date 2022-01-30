import { Category } from "../../entities/Category";
import { ICategoriesRepository, IDTOCreateCategoriesRepository } from "../Implementations/ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository{
    private categoriesRepository: Category[];
    
    constructor(){
        this.categoriesRepository = [];
    }

    async findByName(name: string): Promise<Category> {
        return this.categoriesRepository.find(category => category.name == name);
    }

    async list(): Promise<Category[]> {
        return this.categoriesRepository;
    }

    async create(data: IDTOCreateCategoriesRepository): Promise<void> {
        const {name, description} = data;

        const category = new Category();

        Object.assign(category,{
            name,
            description
        });
    
        this.categoriesRepository.push(category);
    }

} export {CategoriesRepositoryInMemory}