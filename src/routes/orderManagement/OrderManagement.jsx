import { IoIosSearch } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { statusChange } from "../../redux/reducers/OrderSlice";
import { statusColor, statusBgColor } from "./statusColors";
import { useRef } from "react";
import styles from './OrderManagement.module.css';

export const OrderManagement = () => {
  const dispatch = useDispatch()
  const {stateManagement, status} = useSelector(state => state.order);

  const orderList = status !== 'All' ? stateManagement.filter(e => e.status === status) : stateManagement;

  const allRef = useRef();
  const pendingRef = useRef();
  const confirmedRef = useRef();
  const processingRef = useRef();
  const pickedRef = useRef();
  const shippedRef = useRef();
  const deliveredRef = useRef();
  const cancelledRef = useRef();

  return (
    <div className={styles.orderManagement}>
      <nav className={styles.nav}>
        <li style={{borderBottom: status === 'All' ? '3px #0F60FF solid' : ''}} ref={allRef} onClick={() => dispatch(statusChange(allRef.current.innerText))}>All</li>
        <li style={{borderBottom: status === 'Pending' ? '3px #0F60FF solid' : ''}} ref={pendingRef} onClick={() => dispatch(statusChange(pendingRef.current.innerText))}>Pending</li>
        <li style={{borderBottom: status === 'Confirmed' ? '3px #0F60FF solid' : ''}} ref={confirmedRef} onClick={() => dispatch(statusChange(confirmedRef.current.innerText))}>Confirmed</li>
        <li style={{borderBottom: status === 'Processing' ? '3px #0F60FF solid' : ''}} ref={processingRef} onClick={() => dispatch(statusChange(processingRef.current.innerText))}>Processing</li>
        <li style={{borderBottom: status === 'Picked' ? '3px #0F60FF solid' : ''}} ref={pickedRef} onClick={() => dispatch(statusChange(pickedRef.current.innerText))}>Picked</li>
        <li style={{borderBottom: status === 'Shipped' ? '3px #0F60FF solid' : ''}} ref={shippedRef} onClick={() => dispatch(statusChange(shippedRef.current.innerText))}>Shipped</li>
        <li style={{borderBottom: status === 'Delivered' ? '3px #0F60FF solid' : ''}} ref={deliveredRef} onClick={() => dispatch(statusChange(deliveredRef.current.innerText))}>Delivered</li>
        <li style={{borderBottom: status === 'Cancelled' ? '3px #0F60FF solid' : ''}} ref={cancelledRef} onClick={() => dispatch(statusChange(cancelledRef.current.innerText))}>Cancelled</li>
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
      <div className={styles.pagBlock}></div>
    </div>
  )
}
