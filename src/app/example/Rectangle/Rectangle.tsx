import React from 'react'
import * as d3 from 'd3'
import { Bar } from '@visx/shape';

function RectangleShape() {
  return (
    <div>
       <svg width={500} height={500}>
       <Bar

            x = {100}
            y = {100}
            width={100}
            height={300}
            fill='red'
        
        ></Bar>
       </svg>
    </div>
  )
}

export default RectangleShape