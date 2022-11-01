import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    { locationOfExpenditure: "Engine" },
    { locationOfExpenditure: "NCB" },
    { locationOfExpenditure: "Bumper" },
    { locationOfExpenditure: "tiers" },
  ];
  return (
    <div>
      <ExpenseItem
        locationOfExpenditure={expense[0].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        locationOfExpenditure={expense[1].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        locationOfExpenditure={expense[2].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        locationOfExpenditure={expense[3].locationOfExpenditure}
      ></ExpenseItem>
    </div>
  );
}

export default App;
