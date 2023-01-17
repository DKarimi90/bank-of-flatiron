import React, {useState}from 'react'

function TransactionForm() {
const [isClicked, setIsClicked] = useState({
    date: "", 
    description: "", 
    category: "", 
    amount: ""
})
const handleChange = (e) => {
    console.log(e.target.value)
    setIsClicked({
        ...isClicked, 
        [e.target.name] : e.target.value, 
    })
}

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3003/transactions", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify(isClicked)
        })
        window.location.reload()
    }


  return (
    <div>
        <form className = "addTransaction" onSubmit={handleSubmit}>
            <div className = "transactionInput">
                <input type = "date" name ="date" onChange={handleChange} />
                <input type = "text" name ="description" onChange={handleChange}/>
                <input type = "text" name ="category" onChange = {handleChange} />
                <input type = "amount" name ="amount" onChange = {handleChange} />
                <button onClick = {handleSubmit} >Update</button>
            </div>

        </form>
    </div>
  )
}

export default TransactionForm