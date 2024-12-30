import styles from './BestSell.module.css';
import { dataSell } from './dataSell';
import { trendProducts } from './dataSell';

export const BestSell = () => {
  return (
    <div className={styles.bestSell}>
      <div className={styles.listSell}>
        <div className={styles.title}>
          <h3>Best Selling Products</h3>
        </div>
        <div className={styles.data}>
          <div className={styles.panel}>
            <div>product</div>
            <div>total order</div>
            <div>status</div>
            <div>price</div>
          </div>
          {
            dataSell.map(e => 
            <div>
              <div>{e.product}</div>
              <div>{e.total_order}</div>
              <div>{e.status}</div>
              <div>{e.price}</div>
            </div>)
          }
        </div>
      </div>
      <div className={styles.trending}>
         <div className={styles.titlePro}>
            <h3>Trending Products</h3>
            <span>Total 10.4k Visitors</span>
         </div>
         <div className={styles.listPto}>
            {
               trendProducts.map(e => 
                  <div className={styles.proBlock}>
                     <div className={styles.product}>
                        <h4>{e.product}</h4>
                        <span>{e.id}</span>
                     </div>
                     <span className={styles.price}>{e.price}</span>
                  </div>
               )
            }
         </div>
      </div>
    </div>
  )
}
