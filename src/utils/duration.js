export const animationDuration = 1;

export const durationForResult = (offset = 300) => {
  const newArray = Array.from(Array(100).keys());
  const durations = newArray.map((i) => (parseInt(offset) * i) / 1000);
  return durations;
};
