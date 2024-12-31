import { Link } from "react-router-dom";
import { asideImg } from "../asideImg";
import { useLocation } from "react-router-dom";
import styles from './Sidebar.module.css';

export const Sidebar = () => {

   let location = useLocation();

  return (
   <aside className={styles.sidebar}>
      <Link className={styles.goToHome} to='/'>
         <h1 className={styles.title}>Exclusive</h1>
      </Link>
      <div className={styles.sbBlock}>
         <h4 className={styles.subtitle}>main menu</h4>
         <ul>
            <li>
               <img src={asideImg.smarthome} alt="" />
               <Link style={{color: location.pathname === '/' ? '#000' : ''}} to="/">Dashboard</Link>
            </li>
            <li>
               <img src={asideImg.shoppingcart} alt="" />
               <Link style={{color: location.pathname === '/order' ? '#000' : ''}} to="/order">Order Management</Link>
            </li>
            <li>
               <img src={asideImg.users} alt="" />
               <Link style={{color: location.pathname === '/customers' ? '#000' : ''}} to="/customers">Customers</Link></li>
            <li>
               <img src={asideImg.ticket} alt="" />
               <Link style={{color: location.pathname === '/coupon' ? '#000' : ''}} to="/coupon">Coupon Code</Link></li>
            <li>
               <img src={asideImg.circlesquare} alt="" />
               <Link style={{color: location.pathname === '/categories' ? '#000' : ''}} to="/categories">Categories</Link></li>
            <li>
               <img src={asideImg.filetext} alt="" />
               <Link style={{color: location.pathname === '/transaction' ? '#000' : ''}} to="/transaction">Transaction</Link></li>
            <li>
               <img src={asideImg.star} alt="" />
               <Link style={{color: location.pathname === '/brand' ? '#000' : ''}} to="/brand">Brand</Link>
            </li>
         </ul>
      </div>

      <div className={styles.sbBlock}>
         <h4 className={styles.subtitle}>products</h4>
         <ul>
            <li>
               <img src={asideImg.circleplus} alt="" />
               <Link style={{color: location.pathname === '/addproducts' ? '#000' : ''}} to="/addproducts">Add Products</Link>
            </li>
            <li>
               <img src={asideImg.box} alt="" />
               <Link style={{color: location.pathname === '/productlist' ? '#000' : ''}} to="/productlist">Product List</Link>
            </li>
         </ul>
      </div>

      <div className={styles.sbBlock}>
         <h4 className={styles.subtitle}>admin</h4>
         <ul>
            <li>
               <img src={asideImg.usercircle} alt="" />
               <Link style={{color: location.pathname === '/manageadmins' ? '#000' : ''}} to="/manageadmins">Manage Admins</Link>
            </li>
            <li>
               <img src={asideImg.settings} alt="" />
               <Link style={{color: location.pathname === '/adminroles' ? '#000' : ''}} to="/adminroles">Admin Roles</Link>
            </li>
         </ul>
      </div>
</aside>
  )
};