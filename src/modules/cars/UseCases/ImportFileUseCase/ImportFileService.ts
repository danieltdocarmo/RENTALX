import {parse} from 'csv-parse';
import fs from 'fs';
import { CategoryRepository } from '../../Repository/CategoryRepository';

interface ILoadCategory  {
    name: string;
    description: string;
}

class ImportFileService{ 
    constructor(private categoryRepository: CategoryRepository){}
    
    loadCategories(file: Express.Multer.File): Promise<ILoadCategory[]>{
        return new Promise((resolve, reject) => {
           
            const categories: ILoadCategory[] = [];
            const stream = fs.createReadStream(file.path);
            const parseFile = parse();
            stream.pipe(parseFile);
            
            parseFile.on('data', async line => {
                const [name, description] = line;
                categories.push({name, description});
           }).on('end', () => {
               resolve(categories);
           }).on('error', error => {
               reject(error);
           })
        });
    }
    
    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file);
        
        categories.map(category => {
            const findedName = this.categoryRepository.findByName(category.name);
            
            if(!findedName){
                this.categoryRepository.create(category);
            }

            
        });

    }

} export { ImportFileService };