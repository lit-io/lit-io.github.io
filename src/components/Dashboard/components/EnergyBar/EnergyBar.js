import React from 'react';
import './style.css';
import colors from '../../../../constants/colors';

export default function EnergyBar(props) {
  const { x, y, width, height, kwh, max, isKwhShowing, hasStroke } = props;
  const formattedKwh = kwh.toFixed(2);
  const filled = (formattedKwh * height) / max;

  return (
    <g>
      <rect
        x={x}
        y={y}
        rx={5}
        ry={0}
        width={width}
        height={height}
        stroke={hasStroke ? colors.GREEN_DARK : 'none'}
        fill={colors.WHITE}
      />
      <rect
        x={x}
        y={y + height - filled}
        rx={0}
        ry={0}
        width={width}
        height={filled}
        stroke="none"
        fill={colors.GREEN_LIGHT}
      />
      {isKwhShowing && typeof kwh === 'number' && (
        <text
          x="50%"
          y={y + 50}
          textAnchor="middle"
          style={{ fontSize: 22 }}
          fill={colors.GREEN_DARK}
        >
          {`${formattedKwh} KW/H`}
        </text>
      )}
    </g>
  );
}
