import { Main } from '../main/Main';
import { Reports } from '../../components/reports/Reports';
import {TopSelling} from '../../components/topSelling/TopSelling';
import { BestSell } from '../../components/bestSelling/BestSell';
import { TodayOrder } from '../../components/todayOrder/TodayOrder';

export const Home = () => {
  return (
    <div>
      <Main />
      <Reports />
      <TopSelling />
      <BestSell />
      <TodayOrder />
    </div>
  )
}
