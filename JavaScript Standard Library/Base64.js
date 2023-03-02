const original = 'Muhammad&Aufa=Asmawy';
console.log(original);

const encoded = btoa(original);
console.log(encoded);

const decoded = atob(encoded);
console.log(decoded);
