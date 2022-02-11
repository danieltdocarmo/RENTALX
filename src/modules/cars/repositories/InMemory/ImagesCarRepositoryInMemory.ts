import { ImageCar } from "../../infra/typeorm/entities/ImageCar"
import { IImagesCarRepository } from "../IImagesCarRepository";

interface IRequest{
    car_id: string;
    images: string[];
}

class ImagesCarRepositoryInMemory implements IImagesCarRepository{
    private repository: ImageCar[];
    
    constructor(){
        this.repository = []
    }

    async create({ car_id, images }: IRequest): Promise<void> {
        images.map(image => {
            const createdImage = new ImageCar();
            Object.assign(createdImage, 
                {car_id, image});
            this.repository.push(createdImage);
        });
    }
} export { ImagesCarRepositoryInMemory }