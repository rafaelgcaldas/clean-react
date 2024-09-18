import type { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatuscode } from '@/data/protocols/http/http-response'
import { InvalidCredencialsError } from '@/domain/errors/invalid-credencials-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import type { AccountModel } from '@/domain/models/account-model'
import type { AuthenticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatuscode.ok: break
      case HttpStatuscode.unauthorized: throw new InvalidCredencialsError()
      default: throw new UnexpectedError()
    }
  }
}
