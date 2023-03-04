const fs = require('fs');

function getProducts() {
  return new Promise((resolve, reject) => {
    fs.readFile('./JavaScript Async/Promise/products.json', { encoding: 'utf-8' }, (err, data) => {
      if (data) {
        resolve(JSON.parse(data));
      } else {
        reject(err);
      }
    });
  });
}

getProducts()
  .then((products) => {
    console.log('pertama');
    console.log(products);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log('Selesai');
    console.log('');
  });

getProducts()
  .then((products) => {
    console.log('kedua');
    console.log(
      products.map((product) => {
        return product.title;
      })
    );
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log('Selesai');
    console.log('');
  });

const promiseAll = Promise.all([getProducts(), getProducts(), getProducts()]);

promiseAll
  .then((products) => {
    console.log('ketiga');
    console.log(
      products.map((product) => {
        return product.map((product) => {
          return product.title;
        });
      })
    );
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log('Selesai');
    console.log('');
  });

const promiseAny = Promise.any([getProducts(), getProducts(), getProducts()]);

promiseAny
  .then((products) => {
    console.log('keempat');
    console.log(
      products.map((product) => {
        return product.title;
      })
    );
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log('Selesai');
    console.log('');
  });

const promiseRace = Promise.race([getProducts(), getProducts(), getProducts()]);

promiseRace
  .then((products) => {
    console.log('kelima');
    console.log(
      products.map((product) => {
        return product.title;
      })
    );
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log('Selesai');
    console.log('');
  });
