export const statusColor = (e) => {
   let color = e.status === 'Pending' ? '#FFC600'
   : e.status === 'Confirmed' ? '#28C76F'
   : e.status === 'Processing' ? '#0FB7FF'
   : e.status === 'Picked' ? '#0F60FF'
   : e.status === 'Shipped' ? "#BD00FF"
   : e.status === 'Delivered' ? '#33189D'
   : e.status === 'Canceled' ? '#EA5455'
   : '#000';

   return color;
 }

export const statusBgColor = (e) => {

   let bgColor = e.status === 'Pending' ? '#FFC60029'
   : e.status === 'Confirmed' ? '#28C76F29'
   : e.status === 'Processing' ? '#0FB7FF29'
   : e.status === 'Picked' ? '#0F60FF29'
   : e.status === 'Shipped' ? "#BD00FF29"
   : e.status === 'Delivered' ? '#33189D29'
   : '#fff';

   return bgColor;
 }