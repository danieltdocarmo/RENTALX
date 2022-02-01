import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Category } from './Category';

@Entity('cars')
class Car{
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    daily_rate: number;
    
    @Column()
    available: boolean;
    
    @Column()
    license_plate: string;
    
    @Column()
    fine_amount: number;
    
    @Column()
    brand: string;
    
    @CreateDateColumn()
    created_at: Date;

    @Column()
    category_id:string;

    @ManyToOne(() => Category)
    @JoinColumn({name: 'category_id'})
    category: Category;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

} export { Car };