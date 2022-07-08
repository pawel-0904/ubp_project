const findElementAndIndex = <T>(array: Array<T>, callback: (element: T) => boolean): [number | undefined, T | undefined] => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return [i, element];
    }
  }

  return [undefined, undefined];
};

export default findElementAndIndex;
