import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InhabitantModule } from './inhabitant/inhabitant.module';
import * as Joi from 'joi';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { ErrorCheckModule } from './error-check/error-check.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_URI: Joi.string().required(),
        IS_DB_SSL_MODE: Joi.boolean().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory(configService: ConfigService) {
        const IS_DB_SSL_MODE = configService.getOrThrow<boolean>(
          'IS_DB_SSL_MODE',
          false,
        );
        return {
          ssl: IS_DB_SSL_MODE, // 是否要使用 ssl 連線，一般正式連線會啟用
          extra: {
            ssl: IS_DB_SSL_MODE ? { rejectUnauthorized: false } : null,
            poolSize: 5,
            idleTimeoutMillis: 3600000,
          },
          type: 'postgres',//連線資料庫的類型
          url: configService.getOrThrow('DB_URI', ''),
          synchronize: false,//否自動同步 entity 到資料庫 table
          autoLoadEntity: true//是否自動載入 Entity 到 forRoot TypeORM
        };
      },
      inject: [ConfigService],
    }),
    InhabitantModule,
    ErrorCheckModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }
  ],
})
export class AppModule { }