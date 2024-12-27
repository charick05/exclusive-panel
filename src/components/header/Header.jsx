import styles from './Header.module.css';

export const Header = () => {
  return (
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.admin}>
          <img src="/assets/header_icon/bell.png" alt="" />
          <div></div>
        </div>
      </header>
  )
}