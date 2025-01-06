import styles from './OrderManagement.module.css';

export const Pagination = ({i}) => {
  return (
   <span className={styles.num}>{i + 1}</span>
  )
}
