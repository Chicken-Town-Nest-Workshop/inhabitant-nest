import { Inject, Injectable } from '@nestjs/common';
import { InhabitantServiceInterface } from './interfaces/inhabitant.service.interface';
import { InhabitantDto, CreateInhabitantDto, UpdateInhabitantDto } from './dtos';
import { InhabitantRepositoryInterface } from './interfaces/inhabitant.repository.interface';

@Injectable()
export class InhabitantService implements InhabitantServiceInterface {

    constructor(
        @Inject('InhabitantRepositoryInterface')
        private inhabitantRepo: InhabitantRepositoryInterface
    ) { }


    async getAll(): Promise<InhabitantDto[]> {
        return await this.inhabitantRepo.readAll();
    }
    async getById(id: string): Promise<InhabitantDto> {
        return await this.inhabitantRepo.readById(id);
    }
    async createByName(data: CreateInhabitantDto, createId: string): Promise<InhabitantDto[]> {
        return await this.inhabitantRepo.create(data, createId);
    }
    async updateInhabitant(data: UpdateInhabitantDto, updateId: string): Promise<InhabitantDto[]> {
        return await this.inhabitantRepo.update(data, updateId);
    }
    async deleteById(id: string, updateId: string): Promise<InhabitantDto[]> {
        return await this.inhabitantRepo.delete(id, updateId);
    }

}
