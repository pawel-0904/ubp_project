import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

export default () => {
  const history = useNavigate();

  return useCallback((url: string) => () => history(url), [history]);
};
