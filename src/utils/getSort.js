const getSort = (field, _sort, _order) => {
  if (_order === 'asc') {
    return {
      _sort: null,
      _order: null,
    };
  }
  if ((_sort === field && _order === 'asc') || _sort !== field)
    return {
      _sort: field,
      _order: 'desc',
    };
  if (_sort === field && _order === 'desc')
    return {
      _sort: field,
      _order: 'asc',
    };
};

export default getSort;
