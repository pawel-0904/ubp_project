import { useCallback } from 'react';
// @ts-ignore
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();

  return useCallback((url: string) => () => history.push(url), [history]);
};
