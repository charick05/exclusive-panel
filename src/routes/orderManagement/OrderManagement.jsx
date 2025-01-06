import { IoIosSearch } from "react-icons/io";
import { Pagination } from "./Pagination";
import { useSelector, useDispatch } from 'react-redux';
import { TbSelector } from "react-icons/tb";
import { statusChange } from "../../redux/reducers/OrderSlice";
import { statusColor, statusBgColor } from "./statusColors";
import { useState } from "react";
import styles from './OrderManagement.module.css';

export const OrderManagement = () => {
  const dispatch = useDispatch()
  const {stateManagement, status} = useSelector(state => state.order);
  const [showCount, setShowCount] = useState(10);
  const [showOpen, setShowOpen] = useState(false);

  const orderList = status !== 'All' ? stateManagement.filter((e, i) => e.status === status && i <= showCount) : stateManagement.filter((e,i) => i <= showCount);

  let pagCount = showCount === 10 ? 5
    : showCount === 20
    ? 4
    : showCount === 30
    ? 3
    : showCount === 40
    ? 2
    : showCount === 50
    ? 1
  : 0;


  return (
    <div className={styles.orderManagement}>
      <nav className={styles.nav}>
        <li style={{borderBottom: status === 'All' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("All"))}>All</li>
        <li style={{borderBottom: status === 'Pending' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("Pending"))}>Pending</li>
        <li style={{borderBottom: status === 'Confirmed' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("Confirmed"))}>Confirmed</li>
        <li style={{borderBottom: status === 'Processing' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("Processing"))}>Processing</li>
        <li style={{borderBottom: status === 'Picked' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("Picked"))}>Picked</li>
        <li style={{borderBottom: status === 'Shipped' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("Shipped"))}>Shipped</li>
        <li style={{borderBottom: status === 'Delivered' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("Delivered"))}>Delivered</li>
        <li style={{borderBottom: status === 'Cancelled' ? '3px #0F60FF solid' : ''}} onClick={() => dispatch(statusChange("Cancelled"))}>Cancelled</li>
      </nav>
      <div className={styles.filterBlock}>
        <div className={styles.inputBlock}>
          <input type="text" placeholder='Search by order id' />
          <IoIosSearch className={styles.searchIcon} />
        </div>
        <div className={styles.filter}>Filter by date range ^</div>
      </div>
      <div className={styles.main}>
        <div className={styles.panel}>
          <span>Order id</span>
          <span>Created</span>
          <span>customer</span>
          <span>total</span>
          <span>profit</span>
          <span>Status</span>
        </div>
        {
          orderList.map(e => 
            <div key={e.order_id} className={styles.orderBlock}>
              <span>{e.order_id}</span>
              <span>{e.created}</span>
              <span>{e.customers}</span>
              <span>{e.total}</span>
              <span>{e.profit}</span>
              <span
                style={{color: statusColor(e), backgroundColor: statusBgColor(e)}}
                className={styles.status}
              >
                {e.status}
                <span>^</span>
              </span>
              <span className={styles.switch}><img src="/assets/ordersicon/close_order.png" alt="" /></span>
              </div>)
          }
      </div>
      <div className={styles.pagBlock}>
        <div className={styles.showing}>
          <span>Showing</span>
          <div onClick={() => setShowOpen(!showOpen)} className={styles.select}>
            {showCount}
            <TbSelector />
          {showOpen &&
            <div className={styles.selectList}>
              <span onClick={() => setShowCount(10)}>10</span>
              <span onClick={() => setShowCount(20)}>20</span>
              <span onClick={() => setShowCount(30)}>30</span>
              <span onClick={() => setShowCount(40)}>40</span>
              <span onClick={() => setShowCount(50)}>50</span>
            </div>}
          </div>
          <span>of 50</span>
        </div>
        <div
          className={styles.pagination}
        > 
          <span className={styles.num}>&gt;</span>
           {
            [...Array(pagCount)].map((e, i) => <Pagination key={i} i={i} />)
          }
          <span className={styles.num}>&gt;</span>
        </div>
      </div>
    </div>
  )
}
