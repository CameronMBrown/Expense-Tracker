// packages
import React, {useState} from 'react';

// components
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

// styles
import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2023');

    const filterChangeHandler = (year) => {
        setYear(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selectedYear={year} 
                    onSelectYear={filterChangeHandler} 
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;