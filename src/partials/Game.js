import {SVG_NS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.svg = document.createElementNS(SVG_NS, 'svg');
    this.gameElement = document.getElementById(this.element);
    this.svg.setAttributeNS(null, 'width', this.width);
    this.svg.setAttributeNS(null, 'height', this.height);
    this.svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    this.board = new Board(this.width, this.height);
    this.paddle = new Paddle(this.width, this.height);
    this.ball = new Ball(this.width, this.height);
		// Other code goes here...
  }

  render() {
    this.gameElement.innerHTML = '';
    this.gameElement.appendChild(this.svg);

    // More code goes here....
    this.board.render(this.svg);
    this.paddle.render(this.svg);
    this.ball.render(this.svg)
    
  // 
  }
}
