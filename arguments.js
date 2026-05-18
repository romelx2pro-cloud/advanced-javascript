function add(num1, num2) {
  // console.log(arguments);
  let sum = 0;
  for (let index = 0; index < [...arguments].length; index++) {
    const element = [...arguments][index];
    sum += element;
  }

  return console.log(sum);
}

const result = add(2, 3, 5, 7);
console.log(result);
