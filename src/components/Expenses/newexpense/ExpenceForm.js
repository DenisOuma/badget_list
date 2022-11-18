import React from "react";
import "../../../styles/NewExpense.css";

function ExpenceForm(props) {
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
			date: new Date(data.date),
			amount: data.amount,
		};
		props.getExpense(expense);
		setData({
			title: "",
			date: "",
			amount: "",
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						name="title"
						onChange={handleChange}
						value={data.title}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						name="amount"
						step="10"
						value={data.amount}
						onChange={handleChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2090-01-01"
						name="date"
						value={data.date}
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
