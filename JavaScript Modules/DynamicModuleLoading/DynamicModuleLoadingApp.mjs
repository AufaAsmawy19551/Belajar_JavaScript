console.log('Loading...');
setTimeout(() => {
  import('./DynamicModuleLoading.mjs').then((module) => {
    module.sayHello('Eko');
  });
}, 3000);
