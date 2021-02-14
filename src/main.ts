require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });

  const swaggerOptions = new DocumentBuilder()
    .setTitle(app.get('ConfigService').get('projectName'))
    .setDescription(app.get('ConfigService').get('projectDescription'))
    .setVersion(process.env.npm_package_version)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/api-doc', app, document);

  await app.listen(app.get('ConfigService').get('port'));
}

bootstrap();
