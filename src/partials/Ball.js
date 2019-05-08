import {SVG_NS} from '../settings';

export default class Ball {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    render(svg) {
        let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'width', 8);
        ball.setAttributeNS(null, 'height', 56);
        ball.setAttributeNS(null, 'fill', '#fff');
        ball.setAttributeNS(null, 'cx', 256);
        ball.setAttributeNS(null, 'cy', 128);
        ball.setAttributeNS(null, 'r', 8);
        svg.appendChild(ball);
    }
}
