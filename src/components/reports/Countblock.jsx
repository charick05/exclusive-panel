import styles from './Reports.module.css';

export const Countblock = ({count, text}) => {
  return (
    <div className={styles.countblock}>
      <h1>{count}</h1>
      <h3>{text}</h3>
    </div>
  )
}
