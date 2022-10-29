import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { IAdminService } from '../../../../business/admin/admin.service'
import { Admin } from './admin.entity'

@Injectable()
export class AdminService implements IAdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,
  ) {}

  async all() {
    return await this.adminRepo.find()
  }
}
