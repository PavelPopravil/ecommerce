export const arrayToObject = (arr, key) => {
  let obj = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    obj[arr[i][key]] = arr[i];
  }
  return obj;
};

export const filterList = (arr, options) => {

  if (options) {
    const optArr = Object.keys(options);

    return arr.filter((item) => {

      const optionsArray = optArr.map((option) => {
        return options[option].includes(item.properties[option]);
      });

      return optionsArray.every((opt) => opt);
    });
  }
  return arr;
};
