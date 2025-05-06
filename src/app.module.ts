import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './lib/user/infrastructure/config/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './lib/user/infrastructure/user/persistence/user.module';
import { TransactionModule } from './lib/user/infrastructure/transaction/persistence/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeOrmConfig,
      inject: [ConfigService],
    }),
    UserModule,
    TransactionModule,
  ],
})
export class AppModule {}
