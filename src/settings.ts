/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
}
class EnvVariables {
  @IsEnum(Environment)
  ENV: Environment

  @IsNumber()
  PORT: number

  @IsString()
  PROJECT_NAME: string

  @IsString()
  PROJECT_DESCRIPTION: string
}

export function validate(config: Record<string, unknown>) {
  const validateConfig = plainToClass(
    EnvVariables,
    config,
    { enableImplicitConversion: true }
  );

  const errors = validateSync(validateConfig, { skipMissingProperties: false });
  if(errors.length) throw new Error(errors.toString());

  return validateConfig;
}
export default () => ({
  port: +process.env.PORT,
  env: process.env.ENV,
  projectName: process.env.PROJECT_NAME,
});
