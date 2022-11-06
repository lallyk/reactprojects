//ExpenseForm.js

import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__controls">
          <label>Data</label>
          <input type="date" min="2019-01-01" step="2022-12-31" />
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

//NewExpense.js

import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  return (
    <div className="new-expense ">
      <ExpenseForm />
    </div>
  );
};
export default NewExpense;

//App.js

import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";
import React from "react";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "car insurance",
      amount: 50000,
      date: new Date(2022, 1, 24),
    },
    {
      id: "e2",

      title: "toilet paper",

      amount: 500,

      date: new Date(2022, 11, 5),
    },

    {
      id: "e3",

      title: "mouse",

      amount: 3500,

      date: new Date(2022, 9, 2),
    },
    {
      id: "e4",
      title: "toilet paper",
      amount: 500,
      date: new Date(2022, 2, 2),
    },
  ];
  return (
    <div>
      <NewExpense />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}
export default App;
