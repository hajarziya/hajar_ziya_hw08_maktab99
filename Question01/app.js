function setterGenerator(key) {
  return function (value) {
    this[key] = value;
    return this;
  };
}
const user = {};
const nameSetter = setterGenerator("name");
nameSetter.call(user, "Jack");
console.log(user);

// function setterGenerator() {
//   return  (key, value)=> {
//     this[key] = value;
//     return this;
//   };
// }
// const user = {};
// const nameSetter = setterGenerator.call(user);
// nameSetter("name", "Jack");
// console.log(user);
