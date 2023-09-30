import { Injectable } from '@nestjs/common';
import { InhabitantServiceInterface } from './interfaces/inhabitant.service.interface';
import { InhabitantDto, CreateInhabitantDto, UpdateInhabitantDto } from './dtos';

@Injectable()
export class InhabitantService implements InhabitantServiceInterface {
    getAll(): Promise<InhabitantDto[]> {
        throw new Error('Method not implemented.');
    }
    getById(id: string): Promise<InhabitantDto> {
        throw new Error('Method not implemented.');
    }
    createByName(data: CreateInhabitantDto, createId: string): Promise<InhabitantDto[]> {
        throw new Error('Method not implemented.');
    }
    updateInhabitant(data: UpdateInhabitantDto, updateId: string): Promise<InhabitantDto[]> {
        throw new Error('Method not implemented.');
    }
    deleteById(id: string, updateId: string): Promise<InhabitantDto[]> {
        throw new Error('Method not implemented.');
    }

}
