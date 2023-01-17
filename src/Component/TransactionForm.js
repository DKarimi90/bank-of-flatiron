import React from 'react'

function TransactionForm() {
  return (
    <div>
        <form className = "addTransaction">
            <div className = "transactionInput">
                <input type = "date" name ="date" />
                <input type = "text" name ="description" />
                <input type = "text" name ="category" />
                <input type = "amount" name ="amount" />
            </div>

        </form>
    </div>
  )
}

export default TransactionForm