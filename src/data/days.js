import getRandomInRange from './lib/getRandomInRange';
import getEstimatedCostFromKwh from './lib/getEstimatedCostFromKwh';

const DAYS = {
  0: 'S',
  1: 'M',
  2: 'T',
  3: 'W',
  4: 'T',
  5: 'F',
  6: 'S',
};

function generateDailyUsage(_, index) {
  const randomKwh = getRandomInRange(0, 20);
  var date = new Date();
  date.setDate(date.getDate() - index);

  return {
    cost: getEstimatedCostFromKwh(randomKwh),
    kwh: randomKwh,
    timestamp: DAYS[date.getDay()],
  };
}

export default function getUsageForDays(daysBack) {
  return [...new Array(daysBack)].map(generateDailyUsage);
}
