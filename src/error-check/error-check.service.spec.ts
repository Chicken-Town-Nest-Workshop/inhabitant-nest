import { Test, TestingModule } from '@nestjs/testing';
import { ErrorCheckService } from './error-check.service';

describe('ErrorCheckService', () => {
  let errorCheckService: ErrorCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorCheckService],
    }).compile();

    errorCheckService = module.get<ErrorCheckService>(ErrorCheckService);
  });

  it('should throw an error when given an empty string', () => {
    expect(() => errorCheckService.checkOneValue('data', '')).toThrowError(
      'data,資料不能為空或未定義',
    );
  });

  it('should throw an error when given undefined data', () => {
    expect(() =>
      errorCheckService.checkOneValue('data', undefined),
    ).toThrowError('data,資料未定義');
  });

  it('should throw an error when given NaN', () => {
    expect(() => errorCheckService.checkOneValue('data', NaN)).toThrowError(
      'data,資料不能為 NaN',
    );
  });

  it('should throw an error for unsupported data type', () => {
    expect(() => errorCheckService.checkOneValue('data', {})).toThrowError(
      '不支援的資料型別',
    );
  });

  it('should not throw an error when given a valid string', () => {
    // 應該不會拋出錯誤
    expect(() =>
      errorCheckService.checkOneValue('data', 'valid'),
    ).not.toThrow();
  });

  it('should not throw an error when given a valid number', () => {
    // 應該不會拋出錯誤
    expect(() => errorCheckService.checkOneValue('data', 42)).not.toThrow();
  });
});
