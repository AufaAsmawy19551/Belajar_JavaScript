//create date
{
  const date1 = new Date();
  console.log(date1);

  const date2 = new Date(2020, 10, 10);
  console.log(date2);

  const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.log(date3);

  const date4 = new Date(1000);
  console.log(date4);
}

//epoch & unix timestamp
{
  const date1 = new Date();
  console.log(date1.getTime());

  const date2 = new Date(2020, 10, 10);
  console.log(date2.getTime());

  const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.log(date3.getTime());

  const date4 = new Date(1000);
  console.log(date4.getTime());
}

console.log(Date.now());

//date parsing
{
  const unixTime = Date.parse('2020-10-10T08:45:45.123+07:00');
  console.log(unixTime);

  const dateTime = new Date(unixTime);
  console.log(dateTime);
}

//getter & setter
{
  const date = new Date();

  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.getTimezoneOffset());
}
