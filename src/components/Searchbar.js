import React, { useEffect } from 'react'

const Searchbar = () => {
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback)
  })
  const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
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
