'use client';

import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

export default function SvgLayout() {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 1200;
    const height = 1000;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', 'white');

    // Rectangles
    svg.append('rect').attr('x', 50).attr('y', 100).attr('width', 210).attr('height', 70).attr('fill', '#922b21');
    svg.append('text').attr('x', 155).attr('y', 140).attr('text-anchor', 'middle').attr('font-size', 25).attr('fill', 'white').text('Short Term');

    svg.append('rect').attr('x', 265).attr('y', 100).attr('width', 250).attr('height', 70).attr('fill', '#922b21');
    svg.append('text').attr('x', 390).attr('y', 140).attr('text-anchor', 'middle').attr('font-size', 25).attr('fill', 'white').text('Medium Term');

    svg.append('rect').attr('x', 520).attr('y', 100).attr('width', 350).attr('height', 70).attr('fill', '#922b21');
    svg.append('text').attr('x', 695).attr('y', 140).attr('text-anchor', 'middle').attr('font-size', 25).attr('fill', 'white').text('Long Term');

    // Curved Paths
    svg.append('path').attr('d', 'M 517 180 Q520 500 970 460').attr('fill', 'none').attr('stroke', '#eaeded').attr('stroke-width', 5);
    svg.append('path').attr('d', 'M 263 180 Q270 680 970 680').attr('fill', 'none').attr('stroke', '#eaeded').attr('stroke-width', 5);

    // Text
    svg.append('text').attr('x', 150).attr('y', 90).attr('text-anchor', 'middle').attr('font-size', 25).attr('font-weight', 'bold').attr('fill', 'black').text('2024');
    svg.append('text').attr('x', 390).attr('y', 90).attr('text-anchor', 'middle').attr('font-size', 25).attr('font-weight', 'bold').attr('fill', 'black').text('2025');
    svg.append('text').attr('x', 640).attr('y', 90).attr('text-anchor', 'middle').attr('font-size', 25).attr('font-weight', 'bold').attr('fill', 'black').text('2026');

    // Dashed Lines
    svg.append('line').attr('x1', 50).attr('y1', 450).attr('x2', 900).attr('y2', 180).attr('stroke', '#707b7c').attr('stroke-width', 3).attr('stroke-dasharray', '10,5');
    svg.append('line').attr('x1', 50).attr('y1', 650).attr('x2', 1000).attr('y2', 140).attr('stroke', '#707b7c').attr('stroke-width', 3).attr('stroke-dasharray', '10,5');

    // Vertical and Horizontal Lines
    svg.append('rect').attr('x', 50).attr('y', 175).attr('width', 40).attr('height', 600).attr('fill', '#e5e8e8');
    svg.append('rect').attr('x', 50).attr('y', 780).attr('width', 930).attr('height', 40).attr('fill', '#e5e8e8');

    // Circle
    svg.append('circle').attr('cx', 950).attr('cy', 150).attr('r', 100).attr('fill', 'yellow').attr('stroke', '#f39c12').attr('stroke-width', 5);
    svg.append('text').attr('x', 950).attr('y', 130).attr('text-anchor', 'middle').attr('font-size', 20).attr('font-weight', 'bold').attr('fill', 'black').text('3 year');
    svg.append('text').attr('x', 950).attr('y', 150).attr('text-anchor', 'middle').attr('font-size', 20).attr('font-weight', 'bold').attr('fill', 'black').text('$ 40 mm');
    svg.append('text').attr('x', 950).attr('y', 170).attr('text-anchor', 'middle').attr('font-size', 20).attr('font-weight', 'bold').attr('fill', 'black').text('Future State');
  }, []);

  return <svg ref={svgRef}></svg>;
}
