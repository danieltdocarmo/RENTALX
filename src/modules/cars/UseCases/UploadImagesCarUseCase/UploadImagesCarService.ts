import { inject, injectable } from "tsyringe";
import { IImagesCarRepository } from "../../repositories/IImagesCarRepository";

@injectable()
class UploadImagesCarService{
    
    constructor(
      @inject('imagesCarRepository')
      private imagesCarRepository: IImagesCarRepository
    ){}

    async execute({car_id, images}):Promise<void>{
        await this.imagesCarRepository.create({car_id, images});
    }
} export { UploadImagesCarService } 