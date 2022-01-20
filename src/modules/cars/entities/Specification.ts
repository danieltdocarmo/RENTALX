import { Column, PrimaryColumn, CreateDateColumn } from "typeorm";


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