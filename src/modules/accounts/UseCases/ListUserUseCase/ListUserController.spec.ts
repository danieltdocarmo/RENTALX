import request  from "supertest";
import { Connection } from "typeorm";
import { app } from '../../../../shared/infra/http/app';
import  createConnection  from '../../../../shared/infra/typeorm';

describe('Learning Test',  () => {
    let connection: Connection;
    beforeAll(async () => {
        connection = await createConnection()
        await connection.runMigrations();
    });
    
    it('Learning Test', async () =>{
        const response = await request(app)
        .post('/categories', () => {})
        .send({
            name: 'test',
            description: 'test'
        });

        console.log(response);
        expect(response.status).toBe(201);
    });

    afterAll(async () => {
        connection.dropDatabase().then(() => {
            connection.close();
        });
        
    });
   
}); 