import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IDTOUser, IUserRepository } from "./Implementations/IUserRepository";


class UsersRepository implements IUserRepository {
    private userRepository: Repository<User>;
    constructor( 
    ){
        this.userRepository = getRepository(User);
    }

    async create(data: IDTOUser): Promise<void> {
       
        const user = this.userRepository.create(data);
    
        await this.userRepository.save(user);
        }

    async findByEmail(email: string): Promise<User>{
        const userFinded = await this.userRepository.findOne({email});
        return userFinded;
    }

    async findByDriver_license(driver_license:string): Promise<User>{
        const driver_licenseFinded = await this.userRepository.findOne({driver_license});

        return driver_licenseFinded;
    }
    
    async list(): Promise<User[]> {
       return await this.userRepository.find();
    }

} export { UsersRepository }