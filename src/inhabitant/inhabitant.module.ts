import { Module } from '@nestjs/common';
import { InhabitantEntity } from './inhabitant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InhabitantController } from './inhabitant.controller';
import { InhabitantService } from './inhabitant.service';

@Module({
  imports: [TypeOrmModule.forFeature([InhabitantEntity])],
  controllers: [InhabitantController],
  providers: [{
    provide: 'InhabitantServiceInterface',
    useClass: InhabitantService
  }],
})
export class InhabitantModule { }
