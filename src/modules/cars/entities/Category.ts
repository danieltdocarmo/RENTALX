import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

class Category{
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

}

export { Category };