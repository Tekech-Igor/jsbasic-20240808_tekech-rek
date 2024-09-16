function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let numbers = arr.filter(item => !isNaN(parseFloat(item)) && isFinite(item));
  let numArray = numbers.map(item => parseFloat(item));

  let min = Math.min(...numArray);
  let max = Math.max(...numArray);
  
  return { min: min, max: max };
}
