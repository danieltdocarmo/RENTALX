import { hash } from "bcryptjs";
import {v4 as uuid} from 'uuid';

import createConnection from '../index';

async function create(){
    const connection = await createConnection('localhost');
    const id = uuid();
    const password = await hash('adminpassword', 8);

    await connection.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
        VALUES ('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'XXXX-XXXXX')`);

    await connection.close();    
}

create().then(()=>{
    console.log('User admin was created');
});