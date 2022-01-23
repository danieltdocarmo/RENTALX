import  {container}  from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/Repository/Implementations/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/Repository/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/Repository/Implementations/ISpecificationsRepository';
import { SpecificationsRepository } from '../../modules/cars/Repository/SpecificationsRepository';
import { IUserRepository } from '../../modules/accounts/Repositories/Implementations/IUserRepository';
import { UserRepository } from '../../modules/accounts/Repositories/UserRepository';


container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository', 
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
);

container.registerSingleton<IUserRepository>(
    'UsersRepository',
    UserRepository
)
