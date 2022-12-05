// https://www.codewars.com/kata/5904be220881cb68be00007d/train/typescript

const fish = (shoal: String): Number => {
  if (shoal == "") {
    return 1;
  }

  let currentSize = 1;
  let tummyQuantity = 0;

  Array.from(shoal)
    .sort()
    .forEach((fish) => {
      if (parseInt(fish) <= currentSize) {
        tummyQuantity += parseInt(fish);

        if (tummyQuantity >= currentSize * 4) {
          tummyQuantity -= currentSize * 4;
          currentSize++;
        }
      }
    });

  return currentSize;
};

console.log(fish("")); //* 1
console.log(fish("0")); //* 1
console.log(fish("6")); //* 1
console.log(fish("1111")); //* 2
console.log(fish("11112222")); //* 3
console.log(fish("111122223333")); //* 4
console.log(fish("111111111111")); //* 3
console.log(fish("111111111111111111112222222222")); //* 5
console.log(fish("151128241212192113722321331")); //* 5
