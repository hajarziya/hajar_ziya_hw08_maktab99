const counterMaker = () => {
  let num = 0;

  return function countData(count = 0) {
    let sum = count + num;
    num = sum;
    return sum;
  };
};

const counter = counterMaker();

console.log(counter(2));
console.log(counter(3));
console.log(counter(10));
