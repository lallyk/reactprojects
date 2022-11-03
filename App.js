import ExpenseItem from "./components/ExpenseItem";
//import ExpenseDate from "./components/ExpenseDate";
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
