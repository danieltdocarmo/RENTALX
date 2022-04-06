import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";
import {v4 as uuid} from 'uuid';

class Token{

    @PrimaryColumn('uuid')
    id: String;

    @Column()
    refresh_token: String;

    @Column()
    user_id: String;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User)
    @JoinColumn({name : 'user_id'})
    user: User;

    @Column()
    expires_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

} export { Token }
