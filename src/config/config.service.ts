import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development'),
      DEBUG: Joi.boolean().default(false),
      PRISMA_ENDPOINT: Joi.string().required(),
      TMDB_API_KEY: Joi.string().required(),
      DEFAULT_RESULT_NUMBER: Joi.number()
        .integer()
        .default(10),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get isDebug(): boolean {
    return Boolean(this.envConfig.DEBUG);
  }

  get defaultResultNumber(): number {
    return parseInt(this.envConfig.DEFAULT_RESULT_NUMBER);
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
