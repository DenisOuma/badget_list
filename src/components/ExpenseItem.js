import React from "react";
import "../styles/ExpenseItem.css";
import Card from "./Expenses/Card";
import ExpenseDate from "./Expenses/ExpenseDate";

function ExpenseItem({ data }) {
	console.log("Hello Working =>", typeof data.date);

	return (
		<Card className="expense-item">
			<ExpenseDate date={data.date} />
			<div className="expense-item__description">
				<h2>{data.title}</h2>
				<div className="expense-item__price">${data.cost}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
