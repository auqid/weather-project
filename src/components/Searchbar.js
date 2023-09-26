import React from 'react'

const Searchbar = () => {
  const searchHandler=(event)=>{
    console.log('sup')
  }
  const buttonHandler=(event)=>{
    console.log('sup')
  }
    return (
    <div>
      <input type='text' id='search' onChange={searchHandler} placeholder='Enter Location'></input>
      <button onClick={buttonHandler}>Search</button>
    </div>
  )
}

export default Searchbar
