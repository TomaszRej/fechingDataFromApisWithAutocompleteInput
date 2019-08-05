export function createArrayOfTenUniquePollutedCities(pollutedCities) {

  const arr = [];

  for (const city  of pollutedCities) {

    let include = false;
    for (const item of arr) {
      console.log(item);

      if (item.city === city.city) {
        include = true;
      }
    }

    if (!include) {
      arr.push(city);
    }
    if (arr.length === 11) {
      return;
    }

  }
  return arr;
}