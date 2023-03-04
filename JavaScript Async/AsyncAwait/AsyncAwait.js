function sayHelloPromise() {
  return new Promise(function (resolve) {
    resolve('Hello Promise');
  });
}

async function sayHelloAsync() {
  return 'Hello Async';
}

async function sayHelloPromiseInAsync() {
  return new Promise(function (resolve) {
    resolve('Hello Promise in Async');
  });
}

sayHelloPromise().then((data) => console.log(data));
sayHelloAsync().then((data) => console.log(data));
sayHelloPromiseInAsync().then((data) => console.log(data));
