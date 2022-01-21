import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('category')
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