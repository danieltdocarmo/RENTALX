import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { IImagesCarRepository } from "../../repositories/IImagesCarRepository";
import { ImagesCarRepositoryInMemory } from "../../repositories/InMemory/ImagesCarRepositoryInMemory";
import { UploadImagesCarService } from "./UploadImagesCarService";

describe('Upload Images Car Case', () =>{
    let carRepository: ICarsRepository;
    let imagesCarRepository: IImagesCarRepository;
    let uploadImagesCarService: UploadImagesCarService;
    
    beforeEach(()=>{

        imagesCarRepository = new ImagesCarRepositoryInMemory();
        uploadImagesCarService = new UploadImagesCarService(imagesCarRepository);
    });

    it('Should be able to make upload images`s car', async ()=>{
        
        const car = carRepository.create({
            name: "Gol",
            description: "Shipper",
            daily_rate: 1.00,
            license_plate: "golmile",
            fine_amount: 1.00,
            brand: "VW"
        })
        
        throw new AppError(500, 'Implement test');
    });

    it('Should not be able to create upload images from a car doesn`t exist', async()=>{
        throw new AppError(500, 'Implement test');
    }); 


});