import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  const deleteExp = () => {
    const expenseToBeDeleted =
      document.getElementsByClassName(`{expense-item}`);
    if (expenseToBeDeleted != null) {
      mainList.removeChild(expenseToBeDeleted);
    }
    console.log("delete");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <ExpenseDetails amount={props.amount} />
      </div>
      <button remove={x.expense} onClick={deleteExp}>delete</button>
    </Card>
  );
}
export default ExpenseItem;
