import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
 
  return (
    <div className="expenceitem">
      <div className="expenceitem-left">
       
          <ExpenseDate date={props.date}/>
      
        <h4 className="expenceitem-title">{props.title}</h4>
      </div>
      <div>
        <button className="expenceitem-price">${props.amount}</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
