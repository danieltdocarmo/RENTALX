import { Router } from "express";
import { UserAuthenticationController } from "../../../../modules/accounts/UseCases/AuthenticationUseCase/UserAuthenticationContoller";

const authenticationsRoutes = Router();

const userAuthenticationController = new UserAuthenticationController();

authenticationsRoutes.post('/sessions',userAuthenticationController.handle);

export {authenticationsRoutes};
