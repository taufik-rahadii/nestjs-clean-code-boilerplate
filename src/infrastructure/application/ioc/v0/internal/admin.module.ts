import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminResolver } from '../../../presenters/v0/admin/admin.resolver'
import { Admin } from '../../../use_cases/admin/admin.entity'
import { AdminService } from '../../../use_cases/admin/admin.service'

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService, AdminResolver],
  exports: [AdminResolver],
})
export class AdminModule {}
