import type { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatuscode } from '@/data/protocols/http/http-response'
import { InvalidCredencialsError } from '@/domain/errors/invalid-credencials-error'
import type { AuthenticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatuscode.unauthorized: throw new InvalidCredencialsError()
      default: return Promise.resolve()
    }
  }
}
