import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../../domain/user/user';
import { Transaction } from '../../domain/transaction/transaction';

export const getTypeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_PORT') || '5432', 10),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [User, Transaction], // Aquí debe estar la entidad User
  synchronize: true, // Solo para desarrollo
  logging: true,
  ssl: {
    rejectUnauthorized: false, // ⚠️ Solo para desarrollo o certificados self-signed (como Aiven)
  },
});
