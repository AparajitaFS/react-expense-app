import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState, useEffect } from 'react';


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //   });

    const clickHandler = () => {
        setTitle('Updated!')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                {/* <h2>{document.title}</h2> */}
                <h2>{title}</h2>

                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;