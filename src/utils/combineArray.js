const combineArray = (arr) => {
  let arrs = [];
  for (let i in arr) {
    arrs.push(...arr[i]);
  }

  let newData = Array(arrs.length);

  for (let i = 0; i < arrs.length * 100; i++) {
    const randomNumber = ~~(Math.random() * arrs.length);
    const currentHasExist = newData.some((item) => item === arrs[randomNumber]);
    if (!currentHasExist) {
      newData[i] = arrs[randomNumber];
    }
  }
  return newData.filter((item) => item);
};

export default combineArray;
