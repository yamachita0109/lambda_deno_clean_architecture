import { createClient } from "https://denopkg.com/chiefbiiko/dynamodb/mod.ts";
import { IClient } from '../interface/database/IClient.ts'

export class DynamoClient extends IClient {
  private client: any
  constructor() {
    super()
    this.client = createClient({
      region: 'ap-northeast-1',
    })
  }

  get(param) {
    return this.client.getItem(param)
  }

  put(param) {
    return this.client.putItem(param)
  }
}
