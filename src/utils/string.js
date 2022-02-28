export const removeAtRate = (value) => {
  if (!value) return '';
  return value.split('@').join('');
};
export const sliceString = (value, length = 200) => {
  console.log(value.length);
  if (!value) return '';
  if (value.length < length) return value;
  return value.slice(0, length) + '....';
};
