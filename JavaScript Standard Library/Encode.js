//encode decode uri
{
  const url = 'https://contoh.com/product/?title=monitor samsung 24 inch';
  console.log(url);

  const encoded = encodeURI(url);
  console.log(encoded);

  const decoded = decodeURI(encoded);
  console.log(decoded);
}

{
  const value = 'monitor&samsung?24=inch';
  const url = 'https://contoh.com/product/?title=';
  console.log(url + value);

  const encoded = encodeURIComponent(value);
  console.log(url + encoded);

  const decoded = decodeURIComponent(value);
  console.log(url + decoded);
}
