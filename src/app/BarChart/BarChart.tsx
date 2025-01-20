"use client"
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export type BarChartProps = {
    data: number[];
}

export const  BarChart: React.FC<BarChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);


  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // Clear existing content before re-rendering
    svg.selectAll("*").remove();

    // Set up scales
    const x = d3
      .scaleBand()
      .domain(data.map((_, i) => i.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data) ?? 0])
      .range([height - margin.bottom, margin.top]);

    // Draw bars
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (_, i) => x(i.toString()) ?? 0)
      .attr("y", (d) => y(d))
      .attr("height", (d) => y(0) - y(d))
      .attr("width", x.bandwidth())
      .attr("fill", "steelblue");

    // Add X-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((d) => `${'Bangladesh'}`));

    // Add Y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [data]);


    return (
        <div>
            
            <svg ref={svgRef} width="400" height="200" />
        </div>
    )
}


// export default BarChart