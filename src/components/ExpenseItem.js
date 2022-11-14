import React from "react";
import "../styles/ExpenseItem.css";
import ExpenseDate from "./Expenses/ExpenseDate";

function ExpenseItem({ data }) {
	console.log("Hello Working =>", typeof data.date);

	return (
		<div className="expense-item">
			<ExpenseDate date={data.date} />
			<div className="expense-item__description">
				<h2>{data.title}</h2>
				<div className="expense-item__price">${data.cost}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
