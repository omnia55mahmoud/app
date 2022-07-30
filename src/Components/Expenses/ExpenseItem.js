import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem = (props) =>{
 
  return (
    <Card className="expenceitem">
      <div className="expenceitem-left">
       
          <ExpenseDate date={props.date}/>
      
        <h4 className="expenceitem-title">{props.title}</h4>
      </div>
      <div>
        <button className="expenceitem-price">${props.amount}</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
