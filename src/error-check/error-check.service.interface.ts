export interface ErrorCheckServiceInterface {
  /**
   * 檢查字串是否為空
   * @param str
   */
  isNullOrEmpty(str: string): boolean;
  /**
   * 檢查資料是否為空
   * @param dataName 資料名稱
   * @param data 需要被檢查的資料
   */
  checkOneValue<T>(dataName: string, data: T): void;
}
