import { Link } from "react-router-dom";
import { asideImg } from "../asideImg";
import styles from './Sidebar.module.css';

export const Sidebar = () => {
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
               <Link to="/">Dashboard</Link>
            </li>
            <li>
               <img src={asideImg.shoppingcart} alt="" />
               <Link to="/">Order Management</Link>
            </li>
            <li>
               <img src={asideImg.users} alt="" />
               <Link to="/">Customers</Link></li>
            <li>
               <img src={asideImg.ticket} alt="" />
               <Link to="/">Coupon Code</Link></li>
            <li>
               <img src={asideImg.circlesquare} alt="" />
               <Link to="/">Categories</Link></li>
            <li>
               <img src={asideImg.filetext} alt="" />
               <Link to="/">Transaction</Link></li>
            <li>
               <img src={asideImg.star} alt="" />
               <Link to="/">Brand</Link>
            </li>
         </ul>
      </div>

      <div className={styles.sbBlock}>
         <h4 className={styles.subtitle}>products</h4>
         <ul>
            <li>
               <img src={asideImg.circleplus} alt="" />
               <Link to="/">Add Products</Link>
            </li>
            <li>
               <img src={asideImg.box} alt="" />
               <Link to="/">Product List</Link>
            </li>
         </ul>
      </div>

      <div className={styles.sbBlock}>
         <h4 className={styles.subtitle}>admin</h4>
         <ul>
            <li>
               <img src={asideImg.usercircle} alt="" />
               <Link to="/">Manage Admins</Link>
            </li>
            <li>
               <img src={asideImg.settings} alt="" />
               <Link to="/">Admin Roles</Link>
            </li>
         </ul>
      </div>
</aside>
  )
};