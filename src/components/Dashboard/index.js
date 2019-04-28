import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import cx from "classnames";
import EnergyBar from "./components/EnergyBar";
import getRealtimeData from "../../data/realtime";
import getUsageForDays from "../../data/days";
import "./style.css";
import colors from "../../constants/colors";
import CustomAxis from './components/CustomAxis'

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const formatToUsd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
const daysUsageData = getUsageForDays(7);
const maxDayUsage = daysUsageData.reduce((largestKwh, day) => {
  if (largestKwh > day.kwh) return largestKwh;

  return day.kwh;
}, 0);

export default function CustomShapeBarChart() {
  const [currentEnergyUsage, setCurrentEnergyUsage] = useState(
    getRealtimeData()
  );
  const [maxForCurrent, setMaxForCurrent] = useState(100);
  const interval = 1000;

  useInterval(() => {
    setCurrentEnergyUsage(state => {
      const nextState = getRealtimeData();
      const resetValue = maxForCurrent * 0.8;
      if (state.kwh <= resetValue && nextState.kwh >= resetValue) {
        setMaxForCurrent(maxForCurrent * 2);
      }
      return nextState;
    });
  }, interval);

  const [currentPriceWhole, currentPriceDecimal] = formatToUsd
    .format(currentEnergyUsage.estimatedCost)
    .split(".");

  return (
    <div>
      <div
        className="dashboard-today"
        style={{ backgroundColor: colors.GREEN_DARK }}
      >
        <h1
          className={cx({ "text-align-center": 1, "dashboard-description": 1 })}
        >
          {"Today's Energy Usage"}
        </h1>
        <h1 className={cx({ "text-align-center": 1, "current-price": 1 })}>
          <span className="current-price-whole">{currentPriceWhole}</span>
          <span className="current-price-decimal">.{currentPriceDecimal}</span>
        </h1>
        <div className="justify-content-center">
          <BarChart
            barGap={0}
            width={270}
            height={270}
            data={[{ ...currentEnergyUsage, max: maxForCurrent }]}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <Bar
              dataKey="max"
              fill="#8884d8"
              shape={<EnergyBar isKwhShowing={true} />}
              label={{ position: "top" }}
            >
              {[currentEnergyUsage].map((entry, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className="dashboard-history">
        <h1
          className={cx({ "text-align-center": 1, "dashboard-description": 1 })}
          style={{ color: colors.GREEN_DARK }}
        >
          {"Past 7 Days"}
        </h1>
        <div className="justify-content-center">
          <BarChart
            barGap={100}
            barCategoryGap="20%"
            width={400}
            height={180}
            data={daysUsageData.map(day => ({ ...day, max: maxDayUsage }))}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis tickLine={false} dataKey="timestamp" tick={CustomAxis} />
            <YAxis tickLine={false} tick={CustomAxis} />
            <Bar
              dataKey="max"
              fill="#8884d8"
              shape={<EnergyBar hasStroke={true} />}
              label={{ position: "top" }}
            >
              {[currentEnergyUsage].map((entry, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
}
