import "./ExpenseItem.css";
function ExpenseItem(props) {
  const expenseDate = new Date(2022, 11, 1);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 50000;
  // const locationOfExpenditure = "Engine";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h3>{expenseTitle}</h3>
        <div className="expense-item__price">{expenseAmount}</div>
        <div>{props.locationOfExpenditure}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
