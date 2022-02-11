import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Car } from "./Car";

@Entity('images_car')
class ImageCar{

    @PrimaryColumn()
    id: string;

    @Column()
    path: string;

    @ManyToOne(() => Car)
    car_id: string;

    @CreateDateColumn()
    created_at: Date;
} export {ImageCar}