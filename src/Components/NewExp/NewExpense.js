import React from 'react';
import './NewExpense.css';
import NewExpForm from './NewExpForm';
const NewExpense = (props)=>{
const SaveExpenseDataHandller = (enteredExpenseData) =>{
   const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
   }
  props.onAddNewExpense(expenseData)
}
   return(
    <div className='new-expense'>
       <NewExpForm onSaveExpenseData = {SaveExpenseDataHandller}/>
    </div>
   )
}

export default NewExpense;