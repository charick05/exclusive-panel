import { Link } from 'react-router-dom';
import styles from './errorPage.module.css';

export const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.title}>Страница не существует</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  )
}
