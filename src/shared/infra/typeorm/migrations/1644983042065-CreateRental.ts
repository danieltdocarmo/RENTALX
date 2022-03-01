import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRental1644983042065 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'rentals',
            columns: [{
                name: 'id',
                type: 'uuid',
                isPrimary: true
            },{
                name: 'start_date',
                type: 'timestamp',
                default: 'now()'
            },{
                name: 'end_date',
                type: 'timestamp',
                isNullable: true
            },{
                name: 'expected_return_date',
                type: 'timestamp'
            },{
                name: 'total',
                type: 'number',
                isNullable: true
            },{
                name: 'created_at',
                type: 'timestamp',
            },{
                name: 'updated_at',
                type: 'timestamp'
            },
            {
                name: 'car_id',
                type: 'uuid',
            },{
                name: 'user_id',
                type: 'uuid',
            }
        ],
        foreignKeys : [{
            name: 'FKCar_rental',
            referencedTableName: 'cars',
            referencedColumnNames: ['id'],
            referencedDatabase: 'rentals',
            columnNames: ['car_id'] 
        },{
            name: 'FKUser_rental',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            referencedDatabase: 'rentals',
            columnNames: ['user_id'] 
        }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rentals');
    }

}
