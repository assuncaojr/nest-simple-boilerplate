import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import settings, { validate } from './settings';
import { ApiSettingsService } from './utils/api-settings.service';
import * as dbOptions from './orm.config';
import { User } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  ignoreEnvFile: false,
  validate,
  load: [settings],
});

const configOrm = TypeOrmModule.forRoot({
  ...dbOptions,
  entities: [User],
  synchronize: false,
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
