import "./App.css";
import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseList } from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [money, setMoney] = useState("");
  const [category, setCategory] = useState("");
  const [total, setTotal] = useState(0);

  const obj = {
    amount: money,
    id: expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1,
    expenseFor: category,
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    let item = expenses.find((expense) => expense.id == id);

    setTotal(total > 0 ? total - item.amount : 0);
  };

  const calculateTotal = () => {
    let total = 0
    expenses.forEach((oneExpense) => {
      total += Number(oneExpense.amount)
    })
    setTotal(total)
  }

  return (
    <div className="App">
      <h1 style={{textAlign: "center", color: "white"}}>Budget Calculator</h1>
      <ExpenseForm setMoney={setMoney} setCategory={setCategory} setExpenses={setExpenses} expenses={expenses} obj={obj}/>
      <div className="budget-list">
        {expenses.map((expense) => {
          return (
            <ExpenseList expense={expense} handleDelete={handleDelete}/>
          );
        })}
          <div className="total-expense"><h2 className="total">Total - {total}$</h2></div>
          <button onClick={calculateTotal} className="calculate-btn">Calculate Total</button>
      </div>
    </div>
  );
}

export default App;
