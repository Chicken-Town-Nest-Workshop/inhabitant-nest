import { InjectRepository } from '@nestjs/typeorm';
import {
    InhabitantDto,
    CreateInhabitantDto,
    UpdateInhabitantDto,
} from './dtos';
import { InhabitantRepositoryInterface } from './interfaces/inhabitant.repository.interface';
import { InhabitantEntity } from './inhabitant.entity';
import { DataSource, Repository } from 'typeorm';

export class InhabitantRepository implements InhabitantRepositoryInterface {
    private readonly _tableName: string = 'inhabitant';
    private readonly _schema: string[] = [
        'id', 'name', 'hungry', 'occupation', 'age', 'money', 'ban', 'create_time', 'update_time', 'update_user_id'
    ]


    constructor(
        private readonly dataSource: DataSource,
        @InjectRepository(InhabitantEntity)
        private readonly inhabitantDao: Repository<InhabitantEntity>,
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

    async create(
        data: CreateInhabitantDto,
        createId: string,
    ): Promise<InhabitantDto> {
        const newData = new InhabitantEntity();

        newData.name = data.name;
        newData.hungry = 5;
        newData.occupation = '居民';
        newData.age = 0;
        newData.money = 0;
        newData.ban = false;
        newData.update_user_id = createId;

        const queryBuilder = this.dataSource
            .getRepository(InhabitantEntity)
            .createQueryBuilder(this._tableName);

        const result = await queryBuilder
            .insert()
            .into(InhabitantEntity)
            .values([newData])
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

        const id = data.id;

        const result = await queryBuilder
            .update(this._tableName)
            .set({
                name: data.name,
                update_user_id: updateId,
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

    async delete(id: string, updateId: string): Promise<InhabitantDto> {
        const queryBuilder = this.dataSource
            .getRepository(InhabitantEntity)
            .createQueryBuilder(this._tableName);

        const result = await queryBuilder
            .update(this._tableName)
            .set({
                ban: true,
                update_user_id: updateId,
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
