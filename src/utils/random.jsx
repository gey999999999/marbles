const
  offsetX = (x) => x * Math.random(),
  offsetY = (y) => y * Math.random(),
  color = () => {
    const 
      random = () => Math.floor(Math.random()*255);
    return `rgb(${random()},${random()},${random()})`;
  },
  size = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export { offsetX, offsetY, color, size };