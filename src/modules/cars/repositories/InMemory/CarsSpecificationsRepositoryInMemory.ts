import { ICarsSpecificationRepository, IDTOCarsSpecificationRequest } from "../ICarsSpecificationsRepository";

class CarsSpecificationsRepositoryInMemory implements ICarsSpecificationRepository{
    private carsSpecificationsRepository;
    
    constructor(){
        this.carsSpecificationsRepository = [];
    }
    
    create({ car_id, specifications_id }: IDTOCarsSpecificationRequest): Promise<void> {
        throw new Error("Method not implemented.");
    }
} export { CarsSpecificationsRepositoryInMemory }