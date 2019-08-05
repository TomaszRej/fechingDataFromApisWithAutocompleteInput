export function createArrayOfTenUniquePollutedCities(pollutedCities) {

  let arr = [];
  for (const city of pollutedCities) {
    if (arr.length === 0) {
      arr.push(city);
    } else if (arr.length === 10) {
      break;
    } else {
      let include = false;
      for (const item of arr) {
        if (item.city === city.city) {
          include = true;
          break;
        }
      }
      if (!include) {
        arr.push(city);
      }
    }
  }
  return arr;
}