import { User } from '../../enterprise/models/User.ts'
import { IUserRepository } from '../../application/repositories/IUserRepository.ts'
import { IClient } from './IClient.ts'

export class UserRepository extends IUserRepository {
  private connection: any

  constructor(connection: IClient) {
    super()
    this.connection = connection
  }

  get(id: number): Promise<User> {
    return this.connection.get({
      TableName: 'Users',
      Key: { id: id },
    })
  }

  create(user: User): Promise<User> {
    return this.connection.put({
      TableName: 'Users',
      Item: {
        id: new Date().getTime(),
        name: user.getName,
        age: user.setAge,
      },
    })
  }
}