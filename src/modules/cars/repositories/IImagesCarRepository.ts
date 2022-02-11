interface IRequest{
    car_id: string;
    images: string[];
}
interface IImagesCarRepository{

    create({car_id, images}:IRequest):Promise<void>;
    
} export {IImagesCarRepository}