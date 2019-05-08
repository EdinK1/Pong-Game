import {SVG_NS} from '../settings';

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'fill', '#000');
        rect.setAttributeNS(null, 'x', 0);
        rect.setAttributeNS(null, 'y', 0);
        svg.appendChild(rect);

        let line = document.createElementNS(SVG_NS, 'line');
        line.setAttributeNS(null, 'x1', 256);
        line.setAttributeNS(null, 'y1', 0);
        line.setAttributeNS(null, 'x2', 256);
        line.setAttributeNS(null, 'y2', 256);        
        line.setAttributeNS(null, 'stroke', '#fff');
        line.setAttributeNS(null, 'stroke-dasharray', 20,15);
        line.setAttributeNS(null, 'stroke-width', 4);
        line.setAttributeNS(null, 'x', 0);
        line.setAttributeNS(null, 'y', 0);
        svg.appendChild(line);
    }
}