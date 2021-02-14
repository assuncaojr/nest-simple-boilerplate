import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const dbOptions: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [join(__dirname, './**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/*.ts')],
};

export = dbOptions;
