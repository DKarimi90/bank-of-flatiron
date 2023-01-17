import React, {useEffect, useState} from 'react'

function Transactions( {transactions}) {
    const [currentData, setCurrentData] = useState([])
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        const filteredData = currentData.filter(data => data.description.toLowerCase().includes(searchValue.toLowerCase()));
        setCurrentData(filteredData);
    }
    
useEffect(()=>{



    fetch("http://localhost:3003/transactions")
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData)
        setCurrentData(jsonData)
    })
},[])
    console.log(currentData)


  return (
    <div>
              <form className = "form">
            <input className = "search" type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder = "Search Transaction"/>
            <button className = "search-button" onClick={handleSearch}>Search</button>
        </form>
<table>
<tbody>
<tr>
   <th>id</th>
    <th>Date</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
    </tr>
    </tbody>
</table>
        
        {currentData.map(data=>{
    return (

        <table className = "table" key={data.id}>
           <tbody>
            <tr>
                
                <td>{data.id}</td>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td>{data.category}</td>
                <td>{data.amount}</td>
            </tr>
            </tbody>
        </table>)
        })}
    </div>
  )
}

export default Transactions