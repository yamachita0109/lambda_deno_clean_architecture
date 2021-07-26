import { User } from '../../enterprise/models/User.ts'

export abstract class IUserRepository {
  abstract get(id: number): User
  abstract create(user: User): User
}