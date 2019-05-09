import {SVG_NS} from '../settings';

export default class Ball {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    render(svg) {
        let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'fill', '#fff');
        ball.setAttributeNS(null, 'cx', this.width / 2);
        ball.setAttributeNS(null, 'cy', this.height / 2);
        ball.setAttributeNS(null, 'r', this.height / 32);
        svg.appendChild(ball);
    }
}
