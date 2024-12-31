import styles from './TodayOrder.module.css';
import { dataOrders } from './dataOrders';

export const TodayOrder = () => {
  return (
   <div className={styles.today_order}>
    <div className={styles.today}>
      <div className={styles.order}>
         <div className={styles.info}>
            <h3>Today Order</h3>
            <h1 className={styles.count}>16.5K</h1>
            <span className={styles.subtitle}>Orders Over Time</span>
         </div>
         <span className={styles.profit}><span>&uarr; 6%</span>vs last day</span>
      </div>
      <div>
         <img src="/assets/todayOrder_img/today-progress.png" alt="" />
         <div className={styles.numsBlock}>
            <span>12am</span>
            <span>8am</span>
            <span>4pm</span>
            <span>11pm</span>
         </div>
      </div>
    </div>

    <div className={styles.recent}>
        <div className={styles.title}>
          <h3>Recent Orders</h3>
        </div>
        <div className={styles.data}>
          <div className={styles.panel}>
            <div>id</div>
            <div>customer</div>
            <div>status</div>
            <div>total</div>
          </div>
          {
            dataOrders.map(e => 
            <div key={e.id}>
              <div>{e.id}</div>
              <div>{e.customer}</div>
              <div style={{color: e.status === "Pending" ? '#FFC600' : '#1EB564'}}>{e.status}</div>
              <div>{e.total}</div>
            </div>)
          }
        </div>
      </div>
   </div>
  )
}