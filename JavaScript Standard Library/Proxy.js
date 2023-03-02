const target = {};

const handler = {
  get: function (target, property) {
    console.log(`Access property ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    if (typeof value === 'string' && value) {
      target[property] = value.toUpperCase();
      console.log(`Change property ${property} : ${value.toUpperCase()}`);
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = 'Muhammad';
proxy.middleName = 'Aufa';
proxy.lastName = 'Asmawy';

proxy.firstName = '';
proxy.middleName = null;
proxy.lastName = [1, 2, 3, 4, 5];

console.log(proxy.firstName);
console.log(proxy.middleName);
console.log(proxy.lastName);

console.log(target);
