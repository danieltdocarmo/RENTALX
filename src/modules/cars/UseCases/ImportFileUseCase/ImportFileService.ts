import {parse} from 'csv-parse';
import fs from 'fs';
import { CategoriesRepository } from '../../Repository/CategoriesRepository';

interface ILoadCategory  {
    name: string;
    description: string;
}

class ImportFileService{ 
    constructor(private categoriesRepository: CategoriesRepository){}
    
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
               fs.promises.unlink(file.path);
               resolve(categories);
           }).on('error', error => {
               reject(error);
           })
        });
    }
    
    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file);
        
        categories.map(async category => {
            const findedName = await this.categoriesRepository.findByName(category.name);
            
            if(!findedName){
                await this.categoriesRepository.create(category);
            }

        });

    }

} export { ImportFileService };