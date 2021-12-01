import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random(1000).toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense ">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
