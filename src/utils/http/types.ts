export type TResponse<T> = Response & {
  parsedBody?: T
  status: number
  errorStatus?: number
}