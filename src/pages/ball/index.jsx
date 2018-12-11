import React, { Component } from "react";

const
  innerWidth = window.innerWidth,
  innerHeight = window.innerHeight;

class Ball {
  constructor({
    x,
    y,
    vX,
    vY,
    color,
    size
  }){
    this.x = x;
    this.y = y;
    this.vX = vX;
    this.vY = vY;
    this.color = color;
    this.size = size;
  }

  draw(){

  }
}

class Page extends Component {
  componentDidMount(){
    //设置场景
    const
      canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.width = canvas.width;
    ctx.height = canvas.height;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle="#000000";
  }
  render(){
    return (
      <canvas />
    );
  }
}

export default Page;