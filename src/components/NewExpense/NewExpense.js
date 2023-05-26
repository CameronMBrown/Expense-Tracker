import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm.js';
import { v4 as uuidv4} from 'uuid';

import './newExpense.css';

const NewExpense = (props) => {
   const [isEditing, setIsEditing] = useState(false);

   const startEditingHandler = () => {
      setIsEditing(true);
   }

   const stopEditingHandler = () => {
      setIsEditing(false);
   }

   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: uuidv4()
      }

      props.onAddExpense(expenseData);
      setIsEditing(false);
   }

   return (
      <div className="new-expense">
         {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
         {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
      </div>
   );
}

export default NewExpense;