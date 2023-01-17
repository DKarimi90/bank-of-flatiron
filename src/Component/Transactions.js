import React, {useEffect, useState} from 'react'

function Transactions( {transactions}) {
    const [currentData, setCurrentData] = useState([])
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
    const filteredData = currentData.filter(data => data.description.toLowerCase().includes(searchValue.toLowerCase()));
    setCurrentData(filteredData);
    }
    
useEffect(()=>{



    fetch(`http://localhost:3003/transactions?q=${searchValue}`)
    .then(response => response.json())
    .then(currentData => {
        
        setCurrentData(currentData)
    })
},[searchValue])
    console.log(currentData)

function handleSearchValue(e) {
    setSearchValue(e.target.value)
}

  return (
    <div>
        <form className = "form">
            <input className = "search" type="text" value={searchValue} onChange={handleSearchValue} placeholder = "Search Transaction &#128269;" />
            <button className = "btn" onClick={handleSearch}>Search</button>
        </form>
        <table>
  <thead>
    <tr>
      <th>id</th>
      <th>Date</th>
      <th>Description</th>
      <th>Category</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    {currentData.map(data => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.date}</td>
        <td>{data.description}</td>
        <td>{data.category}</td>
        <td>{data.amount}</td>
      </tr>
    ))}
  </tbody>
</table>

        
    </div>
  )
}

export default Transactions