import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CrateSpecificationsCars1644154831192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'specifications_cars',
            columns: [{
                name: 'id',
                type: 'uuid',
                isPrimary: true
            },{
                name: 'car_id',
                type: 'uuid' 
            },{
                name: 'specification_id',
                type: 'uuid'
            },{
                name: 'created_at',
                type: 'timestamp'
            }]
        })
    );

        await queryRunner.createForeignKeys(
            'specifications_cars', 
            [
                new TableForeignKey({
                    name : 'FKCar_id',
                    referencedTableName: 'cars',
                    referencedColumnNames: ['id'],
                    columnNames : ['car_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                }),
                new TableForeignKey({
                    name: 'FKSpecification_id',
                    referencedTableName: 'specifications',
                    referencedColumnNames : ['id'],
                    columnNames: ['specification_id'],
                    onUpdate : 'CASCADE',
                    onDelete : 'SET NULL'
                })
            ]
        );    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys(
            'specifications_cars',
            [
                new TableForeignKey({
                    name: 'FKSpecification_id',
                    referencedTableName: 'specifications',
                    referencedColumnNames : ['id'],
                    columnNames: ['specification_id'],
                    onUpdate : 'CASCADE',
                    onDelete : 'SET NULL'
                }),
                new TableForeignKey({
                    name : 'FKCar_id',
                    referencedTableName: 'cars',
                    referencedColumnNames: ['id'],
                    columnNames : ['car_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
            ]);

        await queryRunner.dropTable('specifications_cars');
    }
}
