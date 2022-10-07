import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="ExpenseDate">
      <h4>
        <div className="ExpenseDate__month">{month}</div>
        <div className="ExpenseDate__day">{day}</div>
        <div className="ExpenseDate__year">{year}</div>
      </h4>
    </div>
  );
};
export default ExpenseDate;
