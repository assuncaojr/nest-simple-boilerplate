/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number(),
  ENV: Joi.string().valid('development', 'production', 'test'),
  PROJECT_NAME: Joi.string().required(),
});

export default () => ({
  port: +process.env.PORT,
  env: process.env.ENV,
  projectName: process.env.PROJECT_NAME,
});
