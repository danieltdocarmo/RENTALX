import { Router} from 'express';
import multer from 'multer';
import { CreateUserController } from '../modules/accounts/UseCases/CreateUserUseCase/CreateUserController';
import { ListUserController } from '../modules/accounts/UseCases/ListUserUseCase/ListUserController';
import { UpdateUserAvatarController } from '../modules/accounts/UseCases/updateUserAvatarUseCase/UpdateUserAvatarController';
import uploadConfig from '../config/upload';
import ensureAuthentication from '../middlewares/ensureAuthentication';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const avatarUploud = multer(uploadConfig.upload('./temp/avatar'));

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUserController.handle);

usersRoutes.patch(
    '/avatar',
    ensureAuthentication,
    avatarUploud.single('avatar'), 
    updateUserAvatarController.handle
);
  

export {usersRoutes};