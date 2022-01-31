import { UsersRepository } from "../../infra/typeorm/Repositories/UsersRepository";
import {inject, injectable} from 'tsyringe';
import deleteFile from "../../../../utils/deleteFile";

interface IRequest{
    userId: string;
    avatarFile: string;
}

@injectable()
class UpdateUserAvatarService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository){}

        async execute({userId, avatarFile}:IRequest): Promise<void>{
            const user = await this.usersRepository.findById(userId);
            
            if(user.avatar){
                await deleteFile(`./temp/avatar/${user.avatar}`);
            }

            user.avatar = avatarFile;

            await this.usersRepository.create(user);
        }

    } export {UpdateUserAvatarService}