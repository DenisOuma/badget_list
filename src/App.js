import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/Expenses/Card";
import "./styles/Expenses.css";

function App() {
	const expenseData = [
		{
			id: 1,
			title: "Mum House",
			date: new Date(2023, 8, 24),
			cost: 6000,
		},
		{
			id: 2,
			title: "My House",
			date: new Date(2024, 3, 14),
			cost: 8000,
		},
		{
			id: 3,
			title: "My Range Rover Sports",
			date: new Date(2024, 1, 16),
			cost: 3000,
		},
		{
			id: 4,
			title: "Maureen Range Rover",
			date: new Date(2024, 2, 13),
			cost: 4000,
		},
		{
			id: 5,
			title: "Wifes Kazibo",
			date: new Date(2023, 3, 11),
			cost: 3000,
		},
	];
	return (
		<div className="App">
			<Card className="expenses">
				{expenseData.map((expence) => (
					<ExpenseItem key={expence.id} data={expence} />
				))}
			</Card>
		</div>
	);
}

export default App;
