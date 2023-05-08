import { Injectable } from '@nestjs/common'

@Injectable()
export class SeederService {
  public init() {
    return 'Inititating Seeder'
  }
}
