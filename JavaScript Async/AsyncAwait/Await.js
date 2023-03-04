const fs = require('fs');

function getProducts() {
  return new Promise((resolve, reject) => {
    fs.readFile('./JavaScript Async/AsyncAwait/products.json', { encoding: 'utf-8' }, (err, data) => {
      if (data) {
        resolve(JSON.parse(data));
      } else {
        reject(err);
      }
    });
  });
}

function getProductNamesPromise() {
  return new Promise((resolve, reject) => {
    getProducts()
      .then((products) => {
        resolve(
          products.map((product) => {
            return product.title;
          })
        );
      })
      .catch((err) => reject(err));
  });
}

async function getProductNamesAsync() {
  const products = await getProducts();
  return products.map((product) => {
    return product.title;
  });
}

getProductNamesPromise().then((productName) => {
  console.log(productName);
});
getProductNamesAsync().then((productName) => {
  console.log(productName);
});
