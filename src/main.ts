import {
  HttpStatus,
  Logger,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { ValidationError } from 'class-validator'
import { AppModule } from './infrastructure/application/app.module'
import * as morgan from 'morgan'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService>(ConfigService)
  const appLogger = new Logger('NestApplication')
  const reqLogger = new Logger('IncomingRequest')

  const port = configService.get<number>('PORT')

  app.enableCors({
    origin: '*',
  })

  app.use(
    morgan('combined', {
      stream: {
        write: (message) => reqLogger.verbose(message),
      },
    }),
  )

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) => {
          const { property, constraints } = error

          const keys = Object.keys(constraints)

          const msgs: string[] = []

          keys.forEach((key) => {
            msgs.push(`${constraints[key]}`)
          })

          return {
            property,
            errors: msgs,
          }
        })

        throw new UnprocessableEntityException(messages)
      },
    }),
  )

  await app.listen(port)
  appLogger.log(`Application is running on port ${port}`)
}
bootstrap()
