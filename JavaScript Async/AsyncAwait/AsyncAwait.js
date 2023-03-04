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

const promiseAll = Promise.all([sayHelloPromise(), sayHelloAsync(), sayHelloPromiseInAsync()]);
promiseAll.then((data) => console.log(data));

const promiseAny = Promise.any([sayHelloPromise(), sayHelloAsync(), sayHelloPromiseInAsync()]);
promiseAny.then((data) => console.log(data));

const promiseRace = Promise.race([sayHelloPromise(), sayHelloAsync(), sayHelloPromiseInAsync()]);
promiseRace.then((data) => console.log(data));
