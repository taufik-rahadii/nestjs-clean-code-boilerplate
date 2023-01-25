import { createParamDecorator } from '@nestjs/common'
import { Args, GraphQLExecutionContext, Query, Resolver } from '@nestjs/graphql'
import { PaginationArgument } from 'src/infrastructure/application/common/arguments/pagination.argument'

@Resolver()
export class TenantResolver {
  @Query(() => String)
  async helloWorld(@Args() pagination: PaginationArgument) {
    return 'hello world'
  }
}
