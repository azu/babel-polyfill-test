console.log(Promise);

Promise.resolve().then(() => {
  throw new Error("Test");
}).catch(error => {
  console.error(error.stack);
}).then(() => {
  require("babel-polyfill");
  console.log("load babel-polyfill");
  console.log(Promise);
}).then(() => {
  return Promise.resolve().then(() => {
    throw new Error("Test");
  }).catch(error => {
    console.error(error.stack);
  });
});
