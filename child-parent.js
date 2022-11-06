import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = () => {

 const [enteredTitle, setenteredTitle] = useState("");

 const [enteredAmount, setenteredAmount] = useState("");

 const [enteredDate, setenteredDate] = useState("");

 const titleChangeHandler = (event) => {

  setenteredTitle(event.target.value);

 };

 const amountChangeHandler = (event) => {

  setenteredAmount(event.target.value);

 };

 const dateChangeHandler = (event) => {

  setenteredDate(event.target.value);

 };

 const submitHandler = (event) => {

  event.preventDefault();



  const expenseData = {

   title: enteredTitle,

   amount: enteredAmount,

   date: new Date(enteredDate),

  };

  console.log(expenseData);

  setenteredTitle(""); // by adding these

  setenteredAmount("");

  setenteredDate("");

 };

 return (

  <form onSubmit={submitHandler}>

   <div className="new-expense__controls">

    <div className="new-expense__controls">

     <label>Title</label>

     <input

      type="text"

      value={enteredTitle}

      onChange={titleChangeHandler}

     />

    </div>

    <div className="new-expense__controls">

     <label>Amount</label>

     <input

      type="number"

      min="0.01"

      step="0.01"

      value={enteredAmount} //we sole this problem by using this value

      onChange={amountChangeHandler}

     />

    </div>

    <div className="new-expense__controls">

     <label>Data</label>

     <input

      type="date"

      min="2019-01-01"

      step="2022-12-31"

      value="enteredDate"// we sole this problem by using this value

      onChange={dateChangeHandler}

     />

    </div>

   </div>

   <div className="new-expense__actions">

    <label>Data</label>

    <button type="submit">Add Expense</button>

   </div>

  </form>

 );

};

export default ExpenseForm;



