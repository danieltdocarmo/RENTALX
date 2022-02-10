import { SpecificationsRepositoryInMemory } from "../../repositories/InMemory/SpecificationsRepositoryInMemory";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { CreateSpecificationService } from "./CreateSpecificationService";

describe('Use case Specification', () =>{
    let createSpecificationService: CreateSpecificationService;
    let specificationsRepositoryInMemory: ISpecificationsRepository;
    
    beforeEach(()=>{
        specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
        createSpecificationService = new CreateSpecificationService(specificationsRepositoryInMemory);
    });
    
    it('Should be able to create a new specification', async ()=>{
        const createdSpecification = await createSpecificationService.execute({
            name:'beautiful',
            description:'verybeautiful'
        });

        expect(createdSpecification).toHaveProperty('id');
    });
});