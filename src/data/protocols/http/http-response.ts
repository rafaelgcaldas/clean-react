export enum HttpStatuscode {
  unauthorized = 401,
  noContent = 204
}
export type HttpResponse = {
  statusCode: HttpStatuscode
  body?: any
}
