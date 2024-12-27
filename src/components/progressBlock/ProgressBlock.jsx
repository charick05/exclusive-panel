import styles from './ProgressBlock.module.css';

export const ProgressBlock = ({title, count, img}) => {

  return (
    <div className={styles.block}>
      <div className={styles.info}>
         <h3 className={styles.title}>{title}</h3>
         <span className={styles.date}>Last 7 days</span>
         <span className={styles.count}>{count}K</span>
         <span className={styles.lastDate}><span>&uarr; 6%</span>vs last 7 days</span>
      </div>
      <img src={img} alt="" />
    </div>
  )
};