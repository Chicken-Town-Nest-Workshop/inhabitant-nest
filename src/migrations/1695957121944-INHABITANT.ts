import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class INHABITANT1695957121944 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inhabitant',
        schema: 'public',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'idCard',
            type: 'varchar',
            length: '128',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'hungry',
            type: 'int',
          },
          {
            name: 'occupation',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'age',
            type: 'int',
          },
          {
            name: 'money',
            type: 'int',
          },
          {
            name: 'ban',
            type: 'boolean',
          },
          {
            name: 'create_time',
            type: 'timestamp without time zone',
          },
          {
            name: 'update_time',
            type: 'timestamp without time zone',
          },
          {
            name: 'update_user_id',
            type: 'varchar',
            length: '128',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('inhabitant', true, true, true);
  }
}
