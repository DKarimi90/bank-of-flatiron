import React, {useState}from 'react'

function TransactionForm() {
    const [transactionList, setTransactionList] = useState()
    const [date, setDate] = useState("")
    const [description, setDescription] = useState([])
    const [category, setCategory] = useState([])
    const [amount, setAmount] = useState([])


    function handleChange() {
        setDate(date)
    }

    function handleChange() {
        setDescription(description)
    }

    function handleChange() {
        setCategory(category)
    }

    function handleChange() {
        setAmount(amount)
    }
    function handleClick() {
    }


  return (
    <div>
        <form className = "addTransaction">
            <div className = "transactionInput">
                <input type = "date" name ="date" />
                <input type = "text" name ="description" />
                <input type = "text" name ="category" />
                <input type = "amount" name ="amount" />
                <button onClick = {handleClick} >Update</button>
            </div>

        </form>
    </div>
  )
}

export default TransactionForm