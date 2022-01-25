import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { UsersRepository } from "../../Repositories/UsersRepository";

@injectable()
class ListUserService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository 
    ){}

    async execute(): Promise<User[]>{
        return this.usersRepository.list();
    } 

} export {ListUserService}