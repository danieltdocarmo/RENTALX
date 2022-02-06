import { Car } from "../modules/cars/infra/typeorm/entities/Car";

expect.extend({
    compareArrayToCategory_id(expected:Car[], received:Car[]){
        
        let pass = true;
    
        expected.forEach((car, index) => {
            if(car.category_id != received[index].category_id){
                pass = false;
            }
        });

        if(pass){
            return {
                message: () => 
                `Only category ${expected[0].category_id} returned`,
                pass: true
            }
        }else{
            return {
                message: () => 
                `expected ${expected[0].category_id || []}, received ${received[0].category_id || []}`,
                pass: false
            };
        }
    }
});

