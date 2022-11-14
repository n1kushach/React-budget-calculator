export const ExpenseList = (props) => {
    return (
        <div className="expense">
        <h1 className="text-amount">{props.expense.amount}$</h1>
        <h2 className="text-currency">FOR {props.expense.expenseFor.toUpperCase()}</h2>
        <button onClick={() => props.handleDelete(props.expense.id)}>DELETE</button>
      </div>
    )
}