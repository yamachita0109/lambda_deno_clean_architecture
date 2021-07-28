import { Context, Event } from 'https://deno.land/x/lambda/mod.ts';
import { UserController } from './interface/controllers/UserController.ts'
import { DynamoClient } from './frameworks/DynamoClient.ts'

export async function handler(event: Event, context: Context) {
  const client = new DynamoClient()
  const userController = new UserController(client)
  const request = {id: 1}
  const response = await userController.getUser(request)
  console.log('response', response)

  return {
    statusCode: 200,
    body: response,
  }
}