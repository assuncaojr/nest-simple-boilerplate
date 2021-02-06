import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import settings, { validate } from './settings';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  ignoreEnvFile: false,
  validate,
  load: [settings],
});
@Module({
  imports: [configModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
