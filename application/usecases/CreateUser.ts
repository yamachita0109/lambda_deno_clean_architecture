import { User } from '../../enterprise/models/User.ts'
import { IUserRepository } from '../repositories/IUserRepository.ts'

export class CreateUser {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(name: string = null, age: number = null) {
    let user = new User(name, age)
    return await this.userRepository.create(user)
  }
}