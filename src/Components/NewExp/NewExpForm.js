import React ,{useState} from 'react';
import './NewExpForm.css';

const NewExpForm = (props) =>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const titleChangeHandeller = (e)=>{
        setEnteredTitle(e.target.value)
        
    }
 
    const amountChangeHandeller = (e) =>{
        setEnteredAmount(e.target.value);
    }
    const DateChangeHandeller = (e) =>{
        setEnteredDate(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault()
       const expenseDate={
        enteredTitle:enteredTitle,
        enteredAmount:enteredAmount,
        enteredDate:enteredDate
       };
       
       props.onSaveExpenseData(expenseDate);
       setEnteredTitle('')
       setEnteredAmount('')
       setEnteredDate('')

    }
  
    return(
      
        <form onSubmit={submitHandler}>
              <h1>hello</h1>
         <div className='new-expense__controls'>
         <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" value={enteredTitle}  onChange={titleChangeHandeller}/>
         </div>
         <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandeller}/>
         </div>
         <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={DateChangeHandeller}/>
         </div>
         </div>
         <div className='new-expense__actions'>
            <button type='submit'>add Expense</button>
         </div>
        </form>
    )
}

export default  NewExpForm;