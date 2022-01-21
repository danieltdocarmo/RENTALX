import { SpecificationsRepository } from "../../Repository/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationtService";

export default (): CreateSpecificationController => {
    const specificationRepository = new SpecificationsRepository();
    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    return new CreateSpecificationController(createSpecificationService);
}
