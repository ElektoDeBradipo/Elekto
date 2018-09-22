import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as Joi from 'joi'

export interface EnvConfig {
  [prop: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor (filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath))
    this.envConfig = this.validateInput(config)
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput (envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production'])
        .default('development'),
      TRAKT_CLIENT_ID: Joi.string().required(),
      TRAKT_CLIENT_SECRET: Joi.string().required(),
      GOOGLE_CLIENT_ID: Joi.string().required(),
      GOOGLE_CLIENT_SECRET: Joi.string().required(),
      PORT: Joi.number().default(3000),
      HOST: Joi.string().default('http://localhost')
    })

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema
    )
    if (error) {
      throw new Error(`Config validation error: ${error.message}`)
    }
    return validatedEnvConfig
  }

  get (key: string): string {
    return this.envConfig[key]
  }

  get apiUrl (): string {
    return `${this.envConfig.HOST}:${this.envConfig.PORT}`
  }
}
