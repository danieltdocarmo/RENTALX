import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateImagesCar1644547231058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images_car',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },{
                    name: 'path',
                    type: 'varchar'
                },{
                    name: 'car_id',
                    type: 'uuid'
                },{
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
        
        await queryRunner.createForeignKey('images_car', new TableForeignKey({
            name: 'FKCar_imagescar',
            referencedTableName: 'cars',
            referencedColumnNames: ['id'],
            referencedDatabase: 'images_car',
            columnNames: ['car_id'] 
        }));
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('images_car', 'FKCar_imagescar');
        await queryRunner.dropTable('images_car');
    }

}
