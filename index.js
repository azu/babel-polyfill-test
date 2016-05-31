console.log(Promise);
require("babel-polyfill");

console.log(Promise);

Promise.resolve().then(() => {
  throw new Error("Test");
}).catch(error => {
  console.error(error.stack);
});
