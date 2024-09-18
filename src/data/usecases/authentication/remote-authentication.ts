import { HttpStatuscode, type HttpPostClient } from '@/data/protocols/http'
import { InvalidCredencialsError, UnexpectedError } from '@/domain/errors'
import type { AccountModel } from '@/domain/models'
import type { Authentication, AuthenticationParams } from '@/domain/usecases'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatuscode.ok: return httpResponse.body
      case HttpStatuscode.unauthorized: throw new InvalidCredencialsError()
      default: throw new UnexpectedError()
    }
  }
}
