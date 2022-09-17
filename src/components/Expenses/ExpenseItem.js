import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenseItem.title);

  const changeTitle = () => {
    setTitle('Elakeed');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseItem.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expenseItem.amount}</div>
        <button className="hiddenButton" onClick={changeTitle}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
