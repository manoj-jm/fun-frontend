  const respone = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await respone.json();
  console.log(data);