import React from "react"
import  './App.css'

const Archived = (props) => {
    const { archivedItems } = props
    console.log(archivedItems)
  return (
    <div className="archived-list">
      <h3>archived todo</h3>
      <ul>
        {archivedItems.map((e, index)=>{
            return(<li key={index}>
                {e}
            </li>)
        })}
      </ul>
    </div>
  )
};

export default Archived;
