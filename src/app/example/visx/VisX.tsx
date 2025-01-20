import React from 'react'
import * as d3 from 'd3';
import { Circle } from '@visx/shape';
// API 

type Props = {
    r : number,
    cx : number,
    cy : number,
    fill : string
}


const VisX : React.FC<Props> = ({cx, cy, r, fill}) => {
    const colorScale = d3.scaleLinear<string>()
        .domain([0, 100])
        .range(['red', 'blue']);
    
    
    return (
        <div>
            <h1 className='text-center text-4xl'>Circle visX</h1>
            <svg width={cx * 2} height={cy * 2}>
            <Circle
            cx={cx}
            cy={cy}
            r={r}
            fill={colorScale(r) || fill}
            >

            </Circle>
        </svg>
        </div>
    )
}

export default VisX