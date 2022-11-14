import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
	console.log("App - Rendered Welcome to React, This is my first React App");
	return (
		<div className="App">
			<ExpenseItem />
		</div>
	);
}

export default App;
