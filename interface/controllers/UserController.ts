import { UserRepository } from '../database/UserRepository.ts'
import { GetUser } from '../../application/usecases/GetUser.ts'
import { CreateUser } from '../../application/usecases/CreateUser.ts'
import { IClient } from '../database/IClient.ts'

export class UserController {
  private userRepository: UserRepository

  constructor(dbConnection: IClient) {
    this.userRepository = new UserRepository(dbConnection)
  }

  createUser(request: any) {
    const { name, age } = request
    return new CreateUser(this.userRepository).execute(name, age)
  }

  getUser(request: any) {
    const { id } = request
    return new GetUser(this.userRepository).execute(id)
  }
}