import { Injectable } from '@nestjs/common';
import { ErrorCheckServiceInterface } from './error-check.service.interface';

@Injectable()
export class ErrorCheckService implements ErrorCheckServiceInterface {
  /**
   * 檢查字串是否為空
   * @param str
   */
  isNullOrEmpty(str: string): boolean {
    return !str || str == undefined || str == '' || str.length == 0;
  }

  /**
   * 檢查資料是否為空
   * @param dataName 資料名稱
   * @param data 需要被檢查的資料
   */
  checkOneValue<T>(dataName: string, data: T): void {
    switch (typeof data) {
      case 'string':
        if (this.isNullOrEmpty(data))
          throw new Error(`${dataName},資料不能為空或未定義`);
        break;
      case 'number':
        if (isNaN(data)) throw new Error(`${dataName},資料不能為 NaN`);
        break;
      case 'undefined':
        throw new Error(`${dataName},資料未定義`);
      default:
        throw new Error('不支援的資料型別');
    }
  }
}
