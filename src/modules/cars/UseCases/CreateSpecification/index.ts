import { SpecificationRepository } from "../../Repository/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationtService";

const specificationRepository = new SpecificationRepository();
const createSpecificationService = new CreateSpecificationService(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export { createSpecificationController};