export const arrayToObject = (arr, key) => {
  let obj = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    obj[arr[i][key]] = arr[i];
  }
  return obj;
};

