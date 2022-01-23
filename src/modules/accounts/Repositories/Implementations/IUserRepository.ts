import { User } from "../../Entities/User";

interface IDTOUser{
    name: string;
    username: string;
    email: string;
    password: string;
    driver_license: string;
}

interface IUserRepository {

    create(data: IDTOUser): Promise<void>;
    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findByDriver_license(driver_license: string): Promise<User>;

} export {IDTOUser, IUserRepository};