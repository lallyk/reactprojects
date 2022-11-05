//ExpenseItem.js

import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  const[amount,setAmount] = useState{props.amount};
  const clickHandler = () => {
    setAmount(100);
    console.log(amount);
    };
      return (
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h3>{props.title}</h3>
            <div className="expense-item__price">{amount}</div>
          <button  onClick={clickHandler}>Change Amount</button></div>
        </Card>
      );
}
export default ExpenseItem;
