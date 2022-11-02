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
