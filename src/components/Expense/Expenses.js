import React, { useState } from "react";
import "./Expenses.css";
//import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("All");
  const filterYearHandler = (year) => {
    setYearSelected(year);
  };

  const filteredExpenses = props.items.filter((e) => {
    return (
      yearSelected === "All" || e.date.getFullYear().toString() === yearSelected
    );
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          yearSelected={yearSelected}
          onFilterYear={filterYearHandler}
        />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;
