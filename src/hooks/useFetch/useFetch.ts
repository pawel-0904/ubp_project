import {useCallback, useEffect, useState} from 'react';

import R from '../../resourses/R';
import { omitNils } from '../../utils';
import {IState, IUseFetchProps, QueryType, ResponseType, SendFunctionType} from "./types";

const SUDIR_UNAUTHORIZED_CODE = '0x00000000';
const SUDIR_UNAUTHORIZED_MESSAGE = 'HPDBA0521I';

const initialHeaders = {
  'Content-Type': 'application/json',
};

const handleError = (error: Response) => {
  // eslint-disable-next-line no-console
  console.log(error);
}

const errorHandlerWrapper = <T>(finallyCallBack: () => void, requestFunction: SendFunctionType<T>) => {
  return (sendPath?: string, query?: QueryType) => {
    return requestFunction(sendPath, query)
      .catch(handleError)
      .finally(finallyCallBack);
  }
};

const BODYLESS_METHODS = ['GET', 'HEAD'];

const initialState = {
  isFetching: false,
  headers: new Headers(),
  error: null,
  resetError: () => {}
};

export default <T>(
  basePath = '',
  {
    // base = process.env.REACT_APP_URL || '',
    base = '',
    method = 'GET',
    query,
    controlled,
    removeBasePath,
    onSuccess,
    onError,
  }: IUseFetchProps<T> = {}
) => {
  const isBodyless = BODYLESS_METHODS.includes(method.toUpperCase());

  const initialUrl = `${base}${basePath}`;

  const initialBody = !isBodyless ? query && JSON.stringify(query) : undefined;
  const initialQuery = isBodyless
    ? query && new URLSearchParams(omitNils(query)).toString()
    : undefined;

  const [state, dispatch] = useState<IState<T>>(initialState);
  const resetError = useCallback(() => dispatch(prevState => ({...prevState, error: null})), [])

  const dispatchNewState = useCallback((newState: IState<T>) =>
    dispatch(prevState => ({
      ...prevState,
      ...newState,
      resetError
    })
  ), [resetError])

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async (sendPath: string | undefined = '', query?: QueryType): Promise<ResponseType<T>> => {
      dispatchNewState({ isFetching: true, error: null });
      const parsedBody = typeof query === 'string' ? query : JSON.stringify(query);
      const body =
        !isBodyless && query && parsedBody || initialBody;
      const queryString =
        (isBodyless &&
          query &&
          new URLSearchParams(omitNils(query)).toString()) ||
        initialQuery;
      const concatenated = removeBasePath
        ? `${base}${sendPath}`
        : `${initialUrl}${sendPath}`;
      const url = [concatenated, queryString].filter(item => !!item).join('?');
      const user = localStorage.getItem('user');
      const roles: Array<string> = JSON.parse(<string>localStorage.getItem('roles'));

      const response: Response = await fetch(url, {
        signal,
        method,
        body,
        headers: {
          ...initialHeaders,
          ...(user && { 'iv-user': user }),
          ...(roles?.length && { 'iv-groups': roles.join(',') }),
        },
      });

      const { ok, headers } = response;

      // TODO: Rewrite this to branchless
      const contentType = headers.get('Content-Type');
      const isJSON = contentType && contentType.includes('application/json');

      if (ok) {
        const sudirCode = headers.get('sudir_error_code');
        const sudirMessage = headers.get('sudir_error_message');
        const data: T = isJSON ? await response.json() : await response.text();

        dispatchNewState({ isFetching: false, headers, data });

        if (
          sudirCode === SUDIR_UNAUTHORIZED_CODE &&
          Array.isArray(sudirMessage) &&
          sudirMessage.includes(SUDIR_UNAUTHORIZED_MESSAGE)
        ) {
          document.location.reload();
        } else if (onSuccess) {
          onSuccess({ data, headers });
        }

        return data;
      } else {
        if (isJSON) {
          const error = response;
          const errorJson = await error.json();
          const outputError = {
            timestamp: errorJson.timestamp,
            status: error.status,
            statusText: error.statusText,
            error: errorJson.error,
            message: errorJson.message,
            localizedMessage: errorJson.localizedMessage,
            path: errorJson.path,
          }

          dispatchNewState({
            isFetching: false,
            headers,
            error: outputError,
          });

          if (onError) {
            onError({ headers, error: outputError });
          }
        } else {
          dispatchNewState({
            isFetching: false,
            headers,
            error: {
              localizedMessage: 'Что-то пошло не так',
            },
          });
          handleError(response);

          if (onError) {
            onError({ headers });
          }
        }
      }
    };

    const afterAll = () => {
      dispatchNewState({ isFetching: false });
    };

    const send = errorHandlerWrapper<T>(afterAll, fetchData);

    dispatchNewState({ send });

    if (!controlled && !removeBasePath) {
      send();
    }

    return () => {
      controller.abort();
    };
  }, [
    base,
    method,
    initialUrl,
    initialBody,
    initialQuery,
    isBodyless,
    controlled,
    removeBasePath,
    onSuccess,
    onError,
    dispatchNewState,
  ]);

  return state;
};
