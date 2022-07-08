const getOrderIconName = (field, _sort, _order) => {
  if (_sort === field && _order === 'asc') return 'SortAsc';
  if (_sort === field && _order === 'desc') return 'SortDesc';

  return 'Sort';
};

export default getOrderIconName;
