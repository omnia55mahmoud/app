import './ExpenseItem.css'
function ExpenseItem(props) {
   const month=props.date.toLocaleString('en-US',{month:'long',})
   const day=props.date.toLocaleString('en-US',{day:'2-digit',})
   const year=props.date.getFullYear()
  return (
    <div className="expenceitem">
      <div className="expenceitem-left">
        <h4 className="expenceitem-date">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </h4>
        <h4 className="expenceitem-title">{props.title}</h4>
      </div>
      <div>
        <button className="expenceitem-price">${props.amount}</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
