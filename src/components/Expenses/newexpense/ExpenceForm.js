import userEvent from "@testing-library/user-event";
import React from "react";
import "../../../styles/NewExpense.css";

function ExpenceForm() {
	const [data, setData] = React.useState({
		title: "",
		date: "",
		amount: "",
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const expense = {
			title: data.title,
			date: data.date,
			amount: data.amount,
		};
		console.log(expense);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" name="title" onChange={handleChange} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" name="amount" onChange={handleChange} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="Date"
						min="2019-4-24"
						step="10"
						name="date"
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenceForm;
