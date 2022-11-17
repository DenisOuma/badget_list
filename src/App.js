import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/Expenses/Card";
import "./styles/Expenses.css";
import NewExpense from "./components/Expenses/newexpense/NewExpense";

function App() {
	const expenseData = [
		{
			id: 1,
			title: "Mum House",
			date: new Date(2023, 8, 24),
			cost: 6000,
		},
	];

	const getExpense = (data = "empty") => {
		console.log("The data Is Found Here ===>", data);
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
