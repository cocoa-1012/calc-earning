export function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000 && value < 1000000) {
    return (value / 1000).toFixed(2).replace(/\.0+$/, '') + 'k';
  }
  if (value >= 1000000 && value < 10000000) {
    return (value / 1000000).toFixed(2).replace(/\.0+$/, '') + 'm';
  }
  if (value >= 10000000) {
    return (value / 10000000).toFixed(2).replace(/\.0+$/, '') + 'b';
  }
  return newValue;
}
