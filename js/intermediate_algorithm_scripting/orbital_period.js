function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let res = [];
  return arr.map(ele => {
    return {
      name: ele.name,
      orbitalPeriod: Math.round((2 * Math.PI * Math.sqrt(Math.pow(ele.avgAlt + earthRadius, 3) / GM)))
    }
  })
  return arr;
}
 
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
