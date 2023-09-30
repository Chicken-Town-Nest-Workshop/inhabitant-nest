import { CreateInhabitantDto, InhabitantDto, UpdateInhabitantDto } from "../dtos";


export interface InhabitantServiceInterface {

    /**
     * 取得所有居民的初步資訊
     */
    getAll(): Promise<Array<InhabitantDto>>;

    /**
     * 取得單一居民的詳細資訊
     * @param id 居民身分證
     */
    getById(id: string): Promise<InhabitantDto>;

    /**
     *  建立居民
     * @param name 新居民名稱
     * @param createId 建立者身分證
     */
    createByName(data: CreateInhabitantDto, createId: string): Promise<Array<InhabitantDto>>;

    /**
     * 更新名稱
     * @param name 新名稱
     * @param id 居民身分證
     * @param updateId 更新者身分證
     */
    updateInhabitant(data: UpdateInhabitantDto, updateId: string): Promise<Array<InhabitantDto>>;

    /**
     * 驅除鎮民
     * @param id 居民身分證
     * @param updateId 更新者身分證
     */
    deleteById(id: string, updateId: string): Promise<Array<InhabitantDto>>;
}