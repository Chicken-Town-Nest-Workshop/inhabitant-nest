import { Global, Module } from '@nestjs/common';
import { ErrorCheckService } from './error-check.service';

@Global()
@Module({
  providers: [
    {
      provide: 'ErrorCheckServiceInterface',
      useClass: ErrorCheckService,
    },
  ],
  exports: [
    {
      provide: 'ErrorCheckServiceInterface',
      useClass: ErrorCheckService,
    },
  ],
})
export class ErrorCheckModule {}
