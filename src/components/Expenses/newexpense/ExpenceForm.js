import React from "react";
import "../../../styles/NewExpense.css";

function ExpenceForm() {
	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="Date" min={new Date()} step="10" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenceForm;
