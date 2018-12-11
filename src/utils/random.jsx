const
  random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  randomColor = () => {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  };

export { random, randomColor };