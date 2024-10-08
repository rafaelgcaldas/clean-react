import type { HttpPostParams } from '@/data/protocols/http'
import { faker } from '@faker-js/faker/.'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  }
})
