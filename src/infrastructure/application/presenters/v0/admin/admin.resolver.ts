import { Query, Resolver } from '@nestjs/graphql'
import { AdminService } from '../../../use_cases/admin/admin.service'
import { Admin } from '../../../use_cases/admin/admin.entity'

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => [Admin])
  async admins() {
    return this.adminService.all()
  }
}
