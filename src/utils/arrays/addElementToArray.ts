const addElementToArray = <T>(index: number, element: T, array: Array<T>) => {
  const outputArray = [...array];
  outputArray.splice(index, 0, element);
  return outputArray;
}

export default addElementToArray