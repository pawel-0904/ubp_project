import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  return useCallback((url: string) => () => navigate(url), [navigate]);
};
