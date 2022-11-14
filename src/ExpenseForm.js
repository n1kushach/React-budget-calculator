export const ExpenseForm = (props) => {
    return (
        <div className="input-field">
        <input
          onChange={(e) => {
            props.setMoney(e.target.value);
          }}
          placeholder="800USD / 1500USD ..."
        ></input>
        <div>
          <input onChange={(e) => {
            props.setCategory(e.target.value);
          }} placeholder="Gaming, Car, Rent ... "></input>
        </div>
        <input
          onClick={() => {
            props.setExpenses([...props.expenses, props.obj]);
            console.log(props.expenses)
          }}
          
          type="submit"
        ></input>
      </div>
    )
}