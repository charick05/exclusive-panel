import styles from './Reports.module.css';
import { Countblock } from './Countblock.jsx';

export const Reports = () => {
  return (
    <div className={styles.reports}>
      <div className={styles.info}>
         <div className={styles.top}>
            <div className={styles.title_block}>
               <h3>Reports</h3>
               <span>Last 7 Days</span>
            </div>
            <div className={styles.coutes}>
              <Countblock count={'24k'} text={"Customers"} />
              <Countblock count={'3.5k'} text={'Total Products'} />
              <Countblock count={"2.5k"} text={"Stock Products"} />
              <Countblock count={"0.5k"} text={'Out of Stock'} />
              <Countblock count={'250k'} text={"Revenue"} />
            </div>
         </div>
         <img src="/assets/progress_img/reports.png" alt="инфографика" />
      </div>
      <div className={styles.users}>
        <div className={styles.users_info}>
          <h3 className={styles.title}>Users in last 30 minutes</h3>
          <h1 className={styles.count}>16.5K</h1>
          <span className={styles.subtitle}>Users per minute</span>
          <img src="/assets/progress_img/bargraph.png" alt="" />
          <h3 className={styles.sales}>Sales by Country</h3>
        </div>
        <img src="/assets/progress_img/country-progress.png" alt="" />
      </div>
    </div>
  )
}