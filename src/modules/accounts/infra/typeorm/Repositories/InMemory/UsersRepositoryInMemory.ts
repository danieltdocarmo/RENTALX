import { User } from "../../entities/User";
import { IDTOUser, IUserRepository } from "../../../../repositories/IUserRepository";

class UsersRepositoryInMemory implements IUserRepository {
    private userRepository: User[];

    constructor(){
        this.userRepository = [];
    }
    
    async create(data: IDTOUser): Promise<void> {
        const user = new User();

        Object.assign(user, data);

        this.userRepository.push(user);
    }

    async list(): Promise<User[]> {
        return this.userRepository;
    }
    
    async findByEmail(email: string): Promise<User> {
        return this.userRepository.find(user => user.email == email);
    }
    
    async findByDriver_license(driver_license: string): Promise<User> {
       return this.userRepository.find(user => user.driver_license == driver_license);
    }
    
    async findById(userId: string): Promise<User> {
        return this.userRepository.find(user => user.id === userId);
    }
    
} export { UsersRepositoryInMemory}