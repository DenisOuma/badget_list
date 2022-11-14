import React from "react";
import "../styles/ExpenseItem.css";

function ExpenseItem() {
	return (
		<div className="expense-item">
			<div className="">March 28th 2021</div>
			<div className="expense-item__description">
				<h2>Car Insuarance</h2>
				<div className="expense-item__price">$567.67</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
