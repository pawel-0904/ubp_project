export type ResponseType<T> = T | undefined;
export type QueryType = object | string | undefined;
export type EmptyResponse = "";
export type SendFunctionType<T> = (sendPath?: string, query?: QueryType) => Promise<ResponseType<T> | EmptyResponse | void>

interface IError {
  timestamp?: string
  status?: number
  statusText?: string
  error?: string
  message?: string
  localizedMessage: string
  path?: string
}

export interface IOnSuccessProps<T> {
  headers: Headers
  data: T
}

export interface IOnErrorProps {
  headers: Headers
  error?: IError
}

export interface IState<T> {
  isFetching?: boolean
  headers?: Headers
  error?: IError | null
  send?: SendFunctionType<T>
  resetError?: () => void
  data?: T
}

export interface IUseFetchProps<T> {
  base?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  query?: object
  controlled?: boolean
  removeBasePath?: boolean
  onSuccess?: (successProps: IOnSuccessProps<T> | null) => void
  onError?: (errorProps: IOnErrorProps) => void
}