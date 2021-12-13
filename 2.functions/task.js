// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }
  avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let index = 0; index < arrOfArr.length; index++) {
    const element = arrOfArr[index];
    const result = func(element);
    if (result > max) {
      max = result;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return Math.abs(max - min);
}
