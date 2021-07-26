import { IUserRepository } from '../repositories/IUserRepository.ts'

export class GetUser {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(id: number) {
    return await this.userRepository.get(id)
  }
}