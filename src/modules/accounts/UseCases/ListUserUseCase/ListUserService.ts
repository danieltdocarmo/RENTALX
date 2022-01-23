import { inject } from "tsyringe";
import { User } from "../../Entities/User";
import { UserRepository } from "../../Repositories/UserRepository";

class ListUserService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: UserRepository 
    ){}

    async execute(): Promise<User[]>{
        return this.usersRepository.list();
    } 

} export {ListUserService}