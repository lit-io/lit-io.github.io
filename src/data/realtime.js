import getRandomInRange from './lib/getRandomInRange';
import getEstimatedCostFromKwh from './lib/getEstimatedCostFromKwh';

let previousKwh = 34;

function getRealtimeData() {
  const random = getRandomInRange(0, 0.005);
  const nextKwh = previousKwh + random;
  previousKwh = nextKwh;

  return {
    estimatedCost: getEstimatedCostFromKwh(nextKwh),
    kwh: nextKwh,
    timestamp: Date.now(),
  };
}

export default getRealtimeData;
