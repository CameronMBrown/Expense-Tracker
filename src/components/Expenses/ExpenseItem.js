import React from 'react';

// components
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; 

// styles
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2 className='expense-item__title'>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;