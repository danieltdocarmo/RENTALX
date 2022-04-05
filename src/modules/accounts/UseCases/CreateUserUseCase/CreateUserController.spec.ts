import  request  from "supertest";
import { Connection, createConnection } from "typeorm";
import { app } from "../../../../shared/infra/http/app";

describe('Component test of create user case ',  () => {
    let connection: Connection;
    
    beforeAll(async () => {
        connection = await createConnection()
        await connection.runMigrations();   
    });
    
    it('Create a new Category', async () =>{

        const userResponse = await request(app)
        .post('/users', () => {})
        .send({
            name: 'John Doe',
            email: 'johndoe@rentx.com',
            password: 'johndoepassword',
            driver_license : '12345678901'
        });

        expect(userResponse.status).toBe(201);
    });

    afterAll(async () => {
        connection.dropDatabase().then(() => {
            connection.close();
        });
        
    });
   
}); 


