import { UsersRepository } from "../../Repositories/UsersRepository";
import {inject, injectable} from 'tsyringe';

interface IRequest{
    userId: string;
    avatarFile: string;
}

@injectable()
class UpdateUserAvatarService{
    constructor(
        @inject('UserRepository')
        private usersRepository: UsersRepository){}

        async execute({userId, avatarFile}:IRequest): Promise<void>{
            const user = await this.usersRepository.findById(userId);
        
            user.avatar = avatarFile;

            await this.usersRepository.create(user);
        }

    } export {UpdateUserAvatarService}