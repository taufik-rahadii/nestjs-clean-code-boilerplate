import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SeederModule } from './infrastructure/seeder/seeder.module'
import { SeederService } from './infrastructure/seeder/seeder.service'

export async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
    .then(async (appContext) => {
      const logger = new Logger('SEEDER')
      logger.debug('Starting Seeder')

      const seederService = appContext.get<SeederService>(SeederService)
      console.log(seederService.init())

      appContext.close()
    })
    .catch((err) => {
      throw err
    })
}

bootstrap()
