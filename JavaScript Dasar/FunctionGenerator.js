function* createNames() {
  yield 'Eko';
  yield 'Joki';
  yield 'Budi';
  yield 'Edi';
}

const names = createNames();
for (const name of names) {
  console.log(name);
}
