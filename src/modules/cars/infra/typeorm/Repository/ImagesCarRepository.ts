import { getRepository, Repository } from "typeorm";
import { IImagesCarRepository } from "../../../repositories/IImagesCarRepository";
import { ImageCar } from "../entities/ImageCar";

interface IRequest{
    car_id: string;
    images: string[];
}

class ImagesCarRepository implements IImagesCarRepository{
    private repository: Repository<ImageCar>

    constructor(){
        this.repository = getRepository(ImageCar);
    }
    
    async create({ car_id, images }: IRequest): Promise<void> {
        
        images.map(async image => {
            const createdImageCar = this.repository.create({car_id, path:image});
            
            await this.repository.save(createdImageCar);
        });
    }

    

}