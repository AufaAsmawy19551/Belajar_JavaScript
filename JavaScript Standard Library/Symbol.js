//symbol
{
  const firstName = Symbol('firstName');
  const lastName = Symbol('lastName');
  const middleName = Symbol('middleName');

  const person = {};
  person[firstName] = 'Muhammad';
  person[middleName] = 'Aufa';
  person[lastName] = 'Asmawy';

  console.log(person);
}

//symbol for
{
  const person = {};
  person[Symbol.for('firstName')] = 'Muhammad';
  person[Symbol.for('middleName')] = 'Aufa';
  person[Symbol.for('lastName')] = 'Asmawy';

  console.log(person[Symbol.for('firstName')]);
  console.log(person[Symbol.for('middleName')]);
  console.log(person[Symbol.for('lastName')]);
}
