import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
export const Header = () => {

  let location = useLocation();

  let headerTitle = location.pathname === '/'
    ? 'Dashboard'
    : location.pathname === '/order'
    ? 'Order Management'
    : location.pathname === '/customers'
    ? 'Customers'
    : location.pathname === '/coupon'
    ? 'Coupon Code'
    : location.pathname === '/categories'
    ? 'Categories'
    : location.pathname === '/transaction'
    ? 'Transaction'
    : location.pathname === '/brand'
    ? 'Brand'
    : location.pathname === '/addproducts'
    ? 'Add Products'
    : location.pathname === '/productlist'
    ? 'Product List'
    : location.pathname === '/manageadmins'
    ? 'Manage Admins'
    : location.pathname === '/adminroles'
    ? 'Admin Roles'
    : '';

  return (
      <header className={styles.header}>
        <h1 className={styles.title}>{headerTitle}</h1>
        <div className={styles.admin}>
          <img src="/assets/header_icon/bell.png" alt="" />
          <div></div>
        </div>
      </header>
  )
}