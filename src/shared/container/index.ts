import  {container}  from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/Repository/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/Repository/SpecificationsRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/Repositories/UsersRepository';
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository';
import { CarsRepository } from '../../modules/cars/infra/typeorm/Repository/CarsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { IRentalRepository } from '../../modules/rental/repositories/IRentalRepository';
import { RentalRepository } from '../../modules/rental/infra/typeorm/repositories/RentalRepository';
import { DateProvider } from './Provider/DateProvider/Implementations/DateProvider';
import { ITokenRepository } from '../../modules/accounts/repositories/ITokenRepository';
import { TokensRepository } from '../../modules/accounts/infra/typeorm/Repositories/TokensRepository';


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

container.registerSingleton<ICarsRepository>(
    'CarsRepository',
    CarsRepository
)

container.registerSingleton<IRentalRepository>(
    'RentalsRepository',
    RentalRepository
)

container.registerSingleton<IDateProvider>(
    'DateProvider',
    DateProvider
)

container.registerSingleton<ITokenRepository>(
    'TokenRepository',
    TokensRepository
)