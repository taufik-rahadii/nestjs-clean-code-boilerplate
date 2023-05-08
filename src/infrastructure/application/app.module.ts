import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { join } from 'path'
import { DatabaseConfig } from '../configs/database.config'
import { ExternalModule } from './ioc/v0/external.module'
import { InternalModule } from './ioc/v0/internal.module'

@Module({
  imports: [
    // ConfigModule initiate
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    // Config Module /src/infrastructure/configs
    DatabaseConfig,

    // Application module
    InternalModule,
    ExternalModule,
  ],
})
export class AppModule {}
