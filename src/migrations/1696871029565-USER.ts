import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class USER1696871029565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user_table',
            columns: [
                {
                    name: 'user_id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'username',
                    type: 'varchar(50)',
                    isNullable: false,
                },
                {
                    name: 'password_hash',
                    type: 'varchar(100)',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar(100)',
                    isNullable: true,
                },
                {
                    name: 'status',
                    type: 'boolean',
                    isNullable: true,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_table', true, true, true);
    }

}
