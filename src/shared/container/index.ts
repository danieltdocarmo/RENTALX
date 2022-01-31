import  {container}  from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/Repository/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/infra/typeorm/Repository/Implementations/ISpecificationsRepository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/Repository/SpecificationsRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/Repositories/UsersRepository';


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
    UsersRepository
)
