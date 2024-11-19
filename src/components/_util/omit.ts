const omit = (obj: Partial<any>, arr: Array<string>) => {
  const result = {} as Partial<any>;
  const filterKeys = Object.keys(obj).filter(key => !arr.includes(key));
  filterKeys.forEach(key => {
    result[key] = obj[key];
  });
  return result;
};

export default omit;
