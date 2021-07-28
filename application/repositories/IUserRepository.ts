import { User } from '../../enterprise/models/User.ts'

export abstract class IUserRepository {
  abstract get(id: number): Promise<User>
  abstract create(user: User): Promise<User>
}