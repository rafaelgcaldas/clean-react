import type { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpStatuscode, type HttpResponse } from '../protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatuscode.noContent
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
