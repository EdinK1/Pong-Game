import {SVG_NS} from '../settings';

export default class Paddle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    render(svg) {
        let p1 = document.createElementNS(SVG_NS, 'rect');
        p1.setAttributeNS(null, 'width', 8);
        p1.setAttributeNS(null, 'height', 56);
        p1.setAttributeNS(null, 'fill', '#fff');
        p1.setAttributeNS(null, 'x', 10);
        p1.setAttributeNS(null, 'y', 100);
        svg.appendChild(p1);

        let p2 = document.createElementNS(SVG_NS, 'rect');
        p2.setAttributeNS(null, 'width', 8);
        p2.setAttributeNS(null, 'height', 56);
        p2.setAttributeNS(null, 'fill', '#fff');
        p2.setAttributeNS(null, 'x', 494);
        p2.setAttributeNS(null, 'y', 100);
        svg.appendChild(p2);
    }
}