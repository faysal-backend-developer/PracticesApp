"use client"
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3';
import VisX from './visx/VisX';
import RectangleShape from './Rectangle/Rectangle';
function example() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();
        svg.append("circle")
            .attr("cx", 800)
            .attr("cy", 100)
            .attr("r", 60)
            .attr("fill", "red")
            .attr("stroke", "black")
            .attr("stroke-width", 3)
    }, [])

  
  return (
    <div>
        <h1 className="text-3xl">
            Just use D3
        </h1>
       <svg ref={svgRef} width="1000" height="400"></svg>

       <VisX r={150} cx={500} cy={500} fill={"red"}/>
       <RectangleShape/>
    </div>
  )
}

export default example