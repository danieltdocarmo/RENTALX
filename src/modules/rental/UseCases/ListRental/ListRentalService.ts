import { inject, injectable } from "tsyringe";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalRepository } from "../../repositories/IRentalRepository";

@injectable()
class ListRentalService {

    constructor(
        @inject('RentalRepository')
        private rentalRepository: IRentalRepository
    ){}

    async execute(user_id: string):Promise<Rental>{

        return await this.rentalRepository.findByUserId(user_id);
    }
} export { ListRentalService }