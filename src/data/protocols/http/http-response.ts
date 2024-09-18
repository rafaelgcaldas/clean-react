export enum HttpStatuscode {
  noContent = 204,
  ok = 200,
  unauthorized = 401,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
}
export type HttpResponse = {
  statusCode: HttpStatuscode
  body?: any
}
