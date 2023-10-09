import { InjectRepository } from '@nestjs/typeorm';
import {
  InhabitantDto,
  UpdateInhabitantDto,
} from './dtos';
import { InhabitantRepositoryInterface } from './interfaces/inhabitant.repository.interface';
import { InhabitantEntity } from './inhabitant.entity';
import { DataSource, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { ClockServiceInterface } from 'src/clock/clock.service.interface';

export class InhabitantRepository implements InhabitantRepositoryInterface {
  private readonly _tableName: string = 'inhabitant';
  private readonly _schema: string[] = [
    'id',
    'name',
    'hungry',
    'occupation',
    'age',
    'money',
    'ban',
    'create_time',
    'update_time',
    'update_user_id',
  ];

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(InhabitantEntity)
    private readonly inhabitantDao: Repository<InhabitantEntity>,
    @Inject('ClockServiceInterface')
    private clockService: ClockServiceInterface,
  ) { }

  async readAll(): Promise<InhabitantDto[]> {
    const result = await this.inhabitantDao.find();

    return result.map((data) => ({
      id: data.id,
      name: data.name,
      age: data.age,
      occupation: data.occupation,
    }));
  }

  async readById(id: string): Promise<InhabitantDto> {
    const result = await this.inhabitantDao.findOne({
      where: {
        id: id,
      },
    });

    return {
      id: result.id,
      name: result.name,
      age: result.age,
      occupation: result.occupation,
    };
  }

  async create(data: InhabitantEntity): Promise<InhabitantDto> {
    const queryBuilder = this.dataSource
      .getRepository(InhabitantEntity)
      .createQueryBuilder(this._tableName);

    // 填寫時間
    const d = new Date(this.clockService.getDateTime());
    data.create_time = d;
    data.update_time = d;

    const result = await queryBuilder
      .insert()
      .into(InhabitantEntity)
      .values([data])
      .returning(this._schema)
      .updateEntity(true)
      .execute();

    const model = result.raw[0] as InhabitantEntity;
    return {
      id: model.id,
      name: model.name,
      age: model.age,
      occupation: model.occupation,
    };
  }

  async update(
    data: UpdateInhabitantDto,
    updateId: string,
  ): Promise<InhabitantDto> {
    const queryBuilder = this.dataSource
      .getRepository(InhabitantEntity)
      .createQueryBuilder(this._tableName);

    // 填寫時間
    const d = new Date(this.clockService.getDateTime());
    const inhabitantId = data.id;

    const result = await queryBuilder
      .update(this._tableName)
      .set({
        name: data.name,
        update_user_id: updateId,
        update_time: d,
      })
      .where(this._tableName + '.id = :id', { id: inhabitantId })
      .returning(this._schema)
      .updateEntity(true)
      .execute();

    const model = result.raw[0] as InhabitantEntity;
    return {
      id: model.id,
      name: model.name,
      age: model.age,
      occupation: model.occupation,
    };
  }

  async delete(id: string, updateId: string): Promise<InhabitantDto> {
    const queryBuilder = this.dataSource
      .getRepository(InhabitantEntity)
      .createQueryBuilder(this._tableName);

    // 填寫時間
    const d = new Date(this.clockService.getDateTime());

    const result = await queryBuilder
      .update(this._tableName)
      .set({
        ban: true,
        update_user_id: updateId,
        update_time: d,
      })
      .where(this._tableName + '.id = :id', { id })
      .returning(this._schema)
      .updateEntity(true)
      .execute();

    const model = result.raw[0] as InhabitantEntity;
    return {
      id: model.id,
      name: model.name,
      age: model.age,
      occupation: model.occupation,
    };
  }
}
