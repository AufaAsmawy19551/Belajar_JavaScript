//creat RegExp
{
  const regex1 = /eko/;
  const regex2 = new RegExp('eko');
  const regex3 = new RegExp(/eko/);
}

//test regex
{
  const names = 'eko joko budi edi';
  const regex = /budi/;

  console.log(regex.exec(names));
  console.log(regex.exec('tidak ada'));

  console.log(regex.test(names));
  console.log(regex.test('tidak ada'));
}

//RegExp modifier
{
  const names = 'eko joko budi edi \neko Joko budi edi \nEko joko budi edi';
  const regex1 = /eko/g;
  const regex2 = /Joko/gi;
  const regex3 = /^eko/gi;
  const regex4 = /^eko/gim;

  let result;
  while ((result = regex1.exec(names)) !== null) {
    console.log(result);
  }

  while ((result = regex2.exec(names)) !== null) {
    console.log(result);
  }

  while ((result = regex3.exec(names)) !== null) {
    console.log(result);
  }

  while ((result = regex4.exec(names)) !== null) {
    console.log(result);
  }
}

//advance RegExp
{
  const regex1 = /ek[aiueo]/gi;
  const regex2 = /e.o/gi;

  const names = 'eno edi eko epo eki eka eco eku eke edo eko eki emi';
  
  let result;
  while ((result = regex1.exec(names)) !== null) {
    console.log(result);
  }
  
  while ((result = regex2.exec(names)) !== null) {
    console.log(result);
  }
}

//RegExp in string
{
  const names = 'eno edi eko epo eki eka eco eku eke edo eko eki emi';

  console.log(names.match(/ek[aiueo]/ig));
  console.log(names.search(/ek[aiueo]/ig));
  console.log(names.replace(/ek[aiueo]/i, "***"));
  console.log(names.replaceAll(/ek[aiueo]/ig, "***"));
  console.log(names.split(/ek[aiueo]/ig));
}
