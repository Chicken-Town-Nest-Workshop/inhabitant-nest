import { Module } from '@nestjs/common';
import { InhabitantEntity } from './inhabitant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([InhabitantEntity])],
})
export class InhabitantModule { }
