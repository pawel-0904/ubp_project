import {TResponse} from './types'

export const http = async <T,>(request: string, body: object): Promise<TResponse<T>> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  const response: TResponse<T> = await fetch(request, requestOptions);

  try {
    response.parsedBody = await response.json();
  } catch (error) {
    console.log('Could not fetch, ', error);
  }

  if (!response.ok) {
    console.log('Could not fetch, ', response.status)
    return response;
  }

  return response;
};