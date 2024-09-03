import React from 'react'
const handleClick = () =>{console.log("Hello Ioan")}
const Button = () => {
  return (
    <div><button onClick = {handleClick} type="button" className="btn btn-outline-info">Info</button></div> 
  )
}

export default Button