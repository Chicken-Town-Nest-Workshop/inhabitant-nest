import { inhabitantDto } from "../dtos/inhabitant.dto";

export interface inhabitantServiceInterface {

    /**
     * 取得所有居民的初步資訊
     */
    getAll(): Promise<Array<inhabitantDto>>;

    /**
     * 取得單一居民的詳細資訊
     * @param id 居民身分證
     */
    getById(id: string): Promise<inhabitantDto>;

    /**
     *  建立居民
     * @param name 新居民名稱
     * @param createId 建立者身分證
     */
    createByName(name: string, createId: string): Promise<Array<inhabitantDto>>;

    /**
     * 更新名稱
     * @param name 新名稱
     * @param id 居民身分證
     * @param updateId 更新者身分證
     */
    updateInhabitant(name: string, id: string, updateId: string): Promise<Array<inhabitantDto>>;
}