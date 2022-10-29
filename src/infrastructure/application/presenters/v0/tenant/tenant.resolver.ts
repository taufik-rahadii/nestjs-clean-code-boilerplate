import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class TenantResolver {
  constructor() {}

  @Query(() => String)
  async helloWorld() {
    return 'hello world'
  }
}
