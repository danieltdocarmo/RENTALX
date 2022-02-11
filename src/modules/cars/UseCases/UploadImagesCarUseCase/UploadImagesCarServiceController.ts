import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadImagesCarService } from "./UploadImagesCarService";

interface IimageArray{
    filename: string;
}
class UploadImagesCarServiceController{

    async handle(request: Request, response: Response):Promise<Response>{
        const {car_id} = request.params;
        const images = request.files as IimageArray[];

        const createImagesCarService = container.resolve(UploadImagesCarService);

        const images_name = images.map(image => image.filename);

        await createImagesCarService.execute({car_id, images:images_name});

        return response.status(201).send();
    }
} export {UploadImagesCarServiceController};