import { hash } from "bcryptjs";
import  request  from "supertest";
import {v4 as uuid} from 'uuid';
import { Connection, createConnection } from "typeorm";
import { app } from "../../../../shared/infra/http/app";

describe('Component test of create category case ',  () => {
    let connection: Connection;
    
    beforeAll(async () => {
        connection = await createConnection()
        await connection.runMigrations();
        const id = uuid();
        const password = await hash('adminpassword', 8);

        await connection.query( 
            `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
            VALUES ('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'XXXX-XXXXX')`);
        
    });
    
    it('Create a new Category', async () =>{

        const responseSession = await request(app)
        .post('/sessions', () => {})
        .send({
            email: 'admin@rentx.com',
            password: 'adminpassword',
        });

        const { token } = responseSession.body;

        const userResponse = await request(app)
        .post('/categories', () => {})
        .send({
            name: 'test',
            description: 'test'
        })
        .set({
            Authorization : `Bearer ${token}`
        });
        expect(userResponse.status).toBe(201);
    });

    afterAll(async () => {
        connection.dropDatabase().then(() => {
            connection.close();
        });
        
    });
   
}); 


