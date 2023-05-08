import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SeederConfig } from '../configs/seeder.config'
import { SeederService } from './seeder.service'

@Module({
  imports: [
    SeederConfig,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [SeederService],
})
export class SeederModule {}
