const
  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  randomColor = () => {
    return `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(0, 255)})`;
  };

export { randomNumber, randomColor };