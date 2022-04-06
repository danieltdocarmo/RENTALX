import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableRefreshToken1648777921842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "refresh_tokens",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },{
                    name: 'refresh_token',
                    type: 'varchar',
                    isNullable: false
                },{
                    name: 'user_id',
                    type: 'uuid'
                },{
                    name: 'expires_at',
                    type: 'timestamp'
                },{
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKUser_id', 
                    referencedTableName : 'users',
                    referencedColumnNames : ['id'],
                    columnNames: ['user_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
