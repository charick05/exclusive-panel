import { Routes, Route } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Home } from '../home/Home';
import { ErrorPage } from '../errorPage/ErrorPage';
import styles from './AppRouter.module.css';

function AppRouter() {
  return (
    <div className={styles.app_container}>
        <Sidebar />
        <div className={styles.main_content}>
            <Header />
            <div className={styles.content}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default AppRouter;