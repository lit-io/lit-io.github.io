import React from 'react';
import colors from '../../../../constants/colors';

export default function({ x, y, stroke, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill={colors.GREEN_DARK}>
        {payload.value}
      </text>
    </g>
  );
}
