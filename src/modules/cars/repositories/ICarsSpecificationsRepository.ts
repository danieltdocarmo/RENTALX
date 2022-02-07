interface IDTOCarsSpecificationRequest{
    car_id: string;
    specifications_id: string[];
}

interface ICarsSpecificationRepository{
    create({car_id, specifications_id}:IDTOCarsSpecificationRequest):Promise<void>
} export { ICarsSpecificationRepository, IDTOCarsSpecificationRequest }