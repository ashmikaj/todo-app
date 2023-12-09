import React from "react"
import  './App.css'

const Archived = (props) => {
    const { archivedItems } = props
    const currentDate = new Date();
  return (
    <div className="archived-list">
      <h3>archived todo</h3>
      <ul>
        {archivedItems.map((e, index)=>{
            return(<li key={index}>
               {e} completed on {currentDate.toDateString()}
            </li>)
        })}
      </ul>
    </div>
  )
};

export default Archived;
