import { COST_IN_KWH } from '../constants';

export default function getEstimatedCostFromKwh(kwh) {
 return kwh * COST_IN_KWH; 
}