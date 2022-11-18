import "./App.css";
import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/Expenses/Card";
import "./styles/Expenses.css";
import NewExpense from "./components/Expenses/newexpense/NewExpense";

function App() {
	const [expenseData, setExpenseData] = React.useState([]);
	const getExpense = (data) => {
		const newExpenseData = {
			...data,
			id: Math.random().toString(),
		};
		setExpenseData([...expenseData, newExpenseData]);
	};
	return (
		<div className="App">
			<Card className="expenses">
				<NewExpense getExpense={getExpense} />
				{expenseData.map((expence) => (
					<ExpenseItem key={expence.id} data={expence} />
				))}
			</Card>
		</div>
	);
}

export default App;
