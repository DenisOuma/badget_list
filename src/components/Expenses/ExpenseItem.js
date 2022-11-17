import React from "react";
import "../../styles/ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ data }) {
	const [title, setTitle] = React.useState(data.title);
	const handleChange = () => {
		setTitle("BizCoop is the new company welcome James");
		console.log(title);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={data.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${data.cost}</div>
				<button onClick={handleChange}>Change</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
