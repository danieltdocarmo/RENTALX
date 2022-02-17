import { AppError } from "../../../../shared/errors/AppError";

describe("Create new Rental use cases", ()=>{

    it('Should be able to create a new Rental', async ()=>{
        throw new AppError(500, 'Implement test');
    });

    it('Should not be able to create a new Rental for a car already rented', async () => {
        throw new AppError(500, 'Implement test');
    });

    it('Should not be able to create a new Rental for a user already have one rental active', async ()=>{
        throw new AppError(500, 'Implement test');
    })
});