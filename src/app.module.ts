import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import settings, { validate } from './settings';
import { ApiSettingsService } from './utils/api-settings.service';
import { UserModule } from './modules/user/user.module';
import { join } from 'path';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  ignoreEnvFile: false,
  validate,
  load: [settings],
});

const configOrm = TypeOrmModule.forRootAsync({
  imports: [ConfigService],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    type: config.get<'mysql'>('DB_TYPE'),
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get<string>('DB_PASSWORD'),
    database: config.get<string>('DB_NAME'),
    synchronize: false,
    logging: true,
    entities: [join(__dirname, './**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, './migrations/*.ts')],
  }),
});

@Module({
  imports: [
    configModule,
    configOrm,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, ApiSettingsService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
