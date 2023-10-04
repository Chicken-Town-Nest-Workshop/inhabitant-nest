import { Inject, Injectable } from '@nestjs/common';
import { InhabitantServiceInterface } from './interfaces/inhabitant.service.interface';
import {
  InhabitantDto,
  CreateInhabitantDto,
  UpdateInhabitantDto,
  Constant,
} from './dtos';
import { InhabitantRepositoryInterface } from './interfaces/inhabitant.repository.interface';
import { ErrorCheckServiceInterface } from 'src/error-check/error-check.service.interface';

@Injectable()
export class InhabitantService implements InhabitantServiceInterface {
  constructor(
    @Inject('InhabitantRepositoryInterface')
    private inhabitantRepo: InhabitantRepositoryInterface,
    @Inject('ErrorCheckServiceInterface')
    private ErrorCheckService: ErrorCheckServiceInterface,
  ) {}

  async getAll(): Promise<InhabitantDto[]> {
    return await this.inhabitantRepo.readAll();
  }

  async getById(id: string): Promise<InhabitantDto> {
    this.ErrorCheckService.checkOneValue('find id', id);

    return await this.inhabitantRepo.readById(id);
  }

  async createByName(
    data: CreateInhabitantDto,
    createId: string,
  ): Promise<InhabitantDto> {
    this.ErrorCheckService.checkOneValue(Constant.InhabitantName, data.name);
    this.ErrorCheckService.checkOneValue(Constant.UpdateId, createId);

    return await this.inhabitantRepo.create(data, createId);
  }

  async updateInhabitant(
    data: UpdateInhabitantDto,
    updateId: string,
  ): Promise<InhabitantDto> {
    this.ErrorCheckService.checkOneValue(Constant.InhabitantId, data.id);
    this.ErrorCheckService.checkOneValue(Constant.InhabitantName, data.name);
    this.ErrorCheckService.checkOneValue(Constant.UpdateId, updateId);

    return await this.inhabitantRepo.update(data, updateId);
  }

  async deleteById(id: string, updateId: string): Promise<InhabitantDto> {
    this.ErrorCheckService.checkOneValue(Constant.InhabitantId, id);
    this.ErrorCheckService.checkOneValue(Constant.UpdateId, updateId);

    return await this.inhabitantRepo.delete(id, updateId);
  }
}
