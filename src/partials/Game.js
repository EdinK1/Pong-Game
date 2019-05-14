import {SVG_NS, PADDLE_WIDTH, PADDLE_HEIGHT, BOARD_GAP, KEYS, RADIUS, SPEED} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import audioFileEnd from '../../public/sounds/pong-05.wav';
import audioFileGame from '../../public/sounds/pong-07.mp3';
import audioBullets from '../../public/sounds/pong-08.wav';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.pingGame = new Audio(audioFileGame);
    this.pingEnd = new Audio(audioFileEnd);
    this.audioBullets = new Audio(audioBullets);
    this.paused = false;
    this.ballArr = [];

    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    const boardMid = (this.height - PADDLE_HEIGHT) / 2;
    this.paddle1 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, BOARD_GAP, boardMid, KEYS.p1up, KEYS.p1down);

    const paddle2Gap = this.width - BOARD_GAP - PADDLE_WIDTH;
    this.paddle2 = new Paddle(this.height, PADDLE_WIDTH, PADDLE_HEIGHT, paddle2Gap, boardMid, KEYS.p2up, KEYS.p2down);
    this.ball = new Ball(this.width, this.height, RADIUS);
    this.score1 = new Score(this.width / 2 - 50, 30);
    this.score2 = new Score(this.width / 2 + 25, 30);
    document.addEventListener('keydown', (event) => {
      if(event.key === KEYS.pause) { 
        this.paused = !this.paused;
        this.paddle1.setSpeed(SPEED);
        this.paddle2.setSpeed(SPEED);
        this.pingGame.pause();
      } 
    });

    document.addEventListener('keydown', (event) => {
      if(event.key === KEYS.reload) {
        window.location.reload(true);
      }
      if(event.key === KEYS.addBall && this.paused === false) {
          this.ballArr.push(new Ball(this.width, this.height, RADIUS));
        }
    });
}
  endGame() {
    const h3 = document.querySelectorAll('h3');
    
    if(this.paddle1.score === 10) {
      this.pingEnd.play();     
      this.pingGame.pause();
      this.paused = true;
      h3[0].setAttribute('style', 'display: none');
      h3[1].setAttribute('style', 'display: none');
      this.gameElement.innerHTML = 'Player 1 wins! Press <span class="text-red">P</span> to play again';
    } else if (this.paddle2.score === 10) {
      this.pingEnd.play();     
      this.pingGame.pause();
      this.paused = true;
      h3[0].setAttribute('style', 'display: none');
      h3[1].setAttribute('style', 'display: none');
      this.gameElement.innerHTML = 'PLayer 2 wins! Press <span class="text-red">P</span> to play again';
    } 
  }


    render() {

    if(this.paused) {
      this.paddle1.setSpeed(0);
      this.paddle2.setSpeed(0);
      return;
    }

    this.gameElement.innerHTML = '';
    this.pingGame.play();
    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.ball.render(svg, this.paddle1, this.paddle2);      
    this.score1.render(svg, this.paddle1.getScore(), this.endGame());
    this.score2.render(svg, this.paddle2.getScore(), this.endGame());
    this.ballArr.forEach((ball) => {
      return ball.render(svg,this.paddle1, this.paddle2);
    }); 
  }
}

