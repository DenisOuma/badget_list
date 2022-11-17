import React from "react";
// import "../../../styles/NewExpense.css";
import ExpenceForm from "./ExpenceForm";
function NewExpense({ getExpense }) {
	return (
		<div className="new-expense">
			<ExpenceForm getExpense={getExpense} />
		</div>
	);
}

export default NewExpense;
