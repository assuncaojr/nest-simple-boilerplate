import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import settings, { validationSchema } from './settings';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  ignoreEnvFile: false,
  validationSchema,
  load: [settings],
});
@Module({
  imports: [configModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
