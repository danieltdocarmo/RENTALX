import { Column, PrimaryColumn, CreateDateColumn, Entity } from "typeorm";

@Entity()
class Specification{
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at: Date;

}

export { Specification };