import { InhabitantDto, CreateInhabitantDto, UpdateInhabitantDto } from "./dtos";
import { InhabitantRepositoryInterface } from "./interfaces/inhabitant.repository.interface";


export class InhabitantRepository implements InhabitantRepositoryInterface {
    readAll(): Promise<InhabitantDto[]> {
        throw new Error("Method not implemented.");
    }
    readById(id: string): Promise<InhabitantDto> {
        throw new Error("Method not implemented.");
    }
    create(data: CreateInhabitantDto, createId: string): Promise<InhabitantDto[]> {
        throw new Error("Method not implemented.");
    }
    update(data: UpdateInhabitantDto, updateId: string): Promise<InhabitantDto[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string, updateId: string): Promise<InhabitantDto[]> {
        throw new Error("Method not implemented.");
    }
}