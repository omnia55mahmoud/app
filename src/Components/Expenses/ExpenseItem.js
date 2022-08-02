import React ,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem = (props) =>{
  const [title,setTitle]=useState(props.title);
 
 const eventHandler=()=>{
  setTitle("updated")
  console.log(props.title)
 }
  return (
    <Card className="expenceitem">
      <div className="expenceitem-left">
       
          <ExpenseDate date={props.date}/>
      
        <h4 className="expenceitem-title">{title}</h4>
      </div>
      <div>
        <button className="expenceitem-price">${props.amount}</button>
        <button onClick={eventHandler}>change title</button>
      </div>
     
    </Card>
  );
}

export default ExpenseItem;
