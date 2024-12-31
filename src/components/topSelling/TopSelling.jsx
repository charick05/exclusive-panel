import styles from './TopSelling.module.css';
import { data } from './dataTrans';

export const TopSelling = () => {

  return (
    <div className={styles.topsell}>
      <div className={styles.category}>
         <div className={styles.titleBlock}>
            <h3>Top Selling Category</h3>
            <span>Total 10.4k Visitors</span>
         </div>
         <div className={styles.img}>
            <img src="/assets/topSelling_img/topsell.png" alt="" />  
         </div>
      </div>
      <div className={styles.transactions}>
        <div className={styles.title}>
          <h3>Last Transactions</h3>
          <span>View All</span>
        </div>
        <div className={styles.data}>
          <div className={styles.panel}>
            <div>id</div>
            <div>issued date</div>
            <div>total</div>
            <div>actions</div>
          </div>
          {
            data.map(e => 
            <div key={e.id}>
              <div>{e.id}</div>
              <div>{e.issued_date}</div>
              <div>{e.total}</div>
              <div>{e.actions}</div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}