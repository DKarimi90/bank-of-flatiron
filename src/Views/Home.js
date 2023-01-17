import React from 'react'
import Transactions from '../Component/Transactions'

export default function Home(transactions) {

    


  return (
    <div>
        <Transactions transactions = {transactions}/>
    </div>
  )
}
