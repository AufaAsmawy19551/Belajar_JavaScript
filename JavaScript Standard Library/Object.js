//object freeze & seal
{
  const person = {
    firstName: 'Muhammad',
    middleName: 'Aufa',
  };

  Object.seal(person);
  person.firstName = '';
  delete person.middleName;
  person.lastName = 'Asmawy';
  console.log(person);

  Object.freeze(person);
  person.firstName = 'Muhammad';
  delete person.middleName;
  person.lastName = 'Asmawy';
  console.log(person);
}

//object assign
{
  const target = {
    firstName: 'Muhammad',
    middleName: '',
  };
  const source = {
    middleName: 'Aufa',
    lastName: 'Asmawy',
  };

  Object.assign(target, source);
  console.log(target);
  console.log(source);
}

//object property name & value properties
{
  const person = {
    firstName: 'Muhammad',
    middleName: 'Aufa',
    lastName: 'Asmawy',
  };

  console.log(Object.values(person));
  console.log(Object.getOwnPropertyNames(person));
}

//JSON
{
  const student = {
    name: 'Muhammad Aufa Asmawy',
    age: 21,
    address: {
      country: 'Indonesia',
      province: 'Jawa Tengah',
    },
  };

  const json = JSON.stringify(student);
  console.log(json);
  
  const jsonObject = JSON.parse(json);
  console.log(jsonObject);
}
