import { faker } from '@faker-js/faker/.'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({
    data: {
      _id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName()
    },
    status: faker.number.int()
  })

  return mockedAxios
}
