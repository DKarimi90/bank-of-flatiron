import React from 'react'
import TransactionForm from '../Component/TransactionForm'
import Transactions from '../Component/Transactions'

export default function Home(transactions) {

    


  return (
    <div>
      <h1>Flatiron Bank</h1> 
        <Transactions transactions = {transactions}/>
        <TransactionForm />
    </div>
  )
}
