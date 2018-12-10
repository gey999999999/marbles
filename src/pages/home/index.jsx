import React, { Component } from "react";
import "./index.less";
import { offsetX, offsetY, color, size } from "utils/random";

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw = (ctx, oX, oY, bg, sz) => {
    ctx.beginPath();
    ctx.arc(oX, oY, sz, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "transparent";
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.stroke();
  }
}

class Home extends Component {
  componentDidMount() {
    const
      canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;
    let balls = [];

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 25; i++) {
      const
        oX = offsetX(width),
        oY = offsetY(height),
        bg = color(),
        sz = size(10, 30);

      ctx.width = width;
      ctx.height = height;

      let a = new Ball(oX, oY, 4, 4, bg, sz);
      balls.push(a);
      
      balls[i].draw(ctx, oX, oY, bg, sz);
    }

  }
  render() {
    return (
      <canvas />
    );
  }
}

export default Home;