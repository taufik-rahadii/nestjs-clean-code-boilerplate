import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Admin } from '../../../use_cases/admin/admin.entity'
import { AdminService } from '../../../use_cases/admin/admin.service'
import { AdminRepository } from '../../../use_cases/admin/admin.repository'
import { AdminController } from '../../../presenters/v0/admin/admin.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [
    {
      provide: 'ADMIN_SERVICE',
      useClass: AdminService,
    },
    {
      provide: 'ADMIN_REPOSITORY',
      useClass: AdminRepository,
    },
  ],
})
export class AdminModule {}
