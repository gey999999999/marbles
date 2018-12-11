import React, { Component } from "react";
import "./index.less";
import { randomNumber, randomColor } from "utils/random";

class Ball {
  constructor(x, y, vX, vY, color, radius) {
    this.x = x;
    this.y = y;
    this.vX = vX;
    this.vY = vY;
    this.color = color;
    this.radius = radius;
  }

  draw = (ctx) => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "transparent";
    ctx.fill();
    ctx.stroke();
  }

  move = (screenWidth, screenHeight) => {
    this.x += this.vX;
    this.y += this.vY;

    if ((this.x + this.radius) >= screenWidth || (this.x - this.radius) <= 0) {
      this.vX = -(this.vX);
    }

    if ((this.y + this.radius) >= screenHeight || (this.y - this.radius) <= 0) {
      this.vY = -(this.vY);
    }
  }

  collision = () => {

  }
}

class Page extends Component {
  drawScreen = (ctx, screenWidth, screenHeight) => {
    ctx.fillStyle = "rgba(0, 0, 0, .25)";
    ctx.fillRect(0, 0, screenWidth, screenHeight);
  }

  componentDidMount() {
    const
      canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d"),
      screenWidth = canvas.width = window.innerWidth,
      screenHeight = canvas.height = window.innerHeight,
      balls = [];

    for (let i = 0; i < 5; i++) {
      const ball = new Ball(
        randomNumber(0, screenWidth),
        randomNumber(0, screenHeight),
        randomNumber(-10, 10),
        randomNumber(-10, 10),
        randomColor(),
        randomNumber(20, 40)
      );

      balls.push(ball);

      setInterval(() => {
        this.drawScreen(ctx, screenWidth, screenHeight);
        balls[i].draw(ctx);
        balls[i].move(screenWidth, screenHeight);
      }, 5);
    }
  }

  render() {
    return (
      <canvas />
    );
  }
}

export default Page;