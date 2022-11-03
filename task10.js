app.js

import ExpenseItem from "./components/ExpenseItem";
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


//expenseItem.js

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <ExpenseDetails amount={props.amount} />
      </div>
    </div>
  );
}
export default ExpenseItem;

//expensedate.js

import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

//expensedetails

import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};
export default ExpenseDetails;



