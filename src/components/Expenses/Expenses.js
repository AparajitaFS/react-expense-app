import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('ALL');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        if (filteredYear === "ALL") {
            return props.items
        }
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <Card className="expenses">
            <ExpensesFilter 
            selected={filteredYear}
            onChangeFilter={filterChangeHandler} />
            <ExpenseChart expense={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses