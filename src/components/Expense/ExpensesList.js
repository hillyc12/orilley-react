import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found.</h2>;
  }
  return props.items.map((e) => (
    <ExpenseItem
      className="expenses-list"
      key={e.id}
      title={e.title}
      amount={e.amount}
      date={e.date}
    />
  ));
};

export default ExpensesList;
