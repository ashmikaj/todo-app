import React, { useState, useEffect } from "react"
import { PiCheckCircleLight, PiCheckCircleFill } from "react-icons/pi";
import Archived from './Archived';
import fs from 'fs';
import './App.css';

const Todo = (props) => {
  const { list, handleUpdatedTodo } = props;
  const [updatedList, setUpdatedList ] = useState(list)
  const [archived, setArchived] = useState([]);




  const handleArchived= task =>{
    return setArchived([...archived, task])
  }


  const handleIncomplete = async ({id, task } = task) =>{
    const newList = updatedList.filter((e)=>e.id!=id);
   setUpdatedList(newList) 
   handleArchived(task)
   handleUpdatedTodo(newList)
}


  useEffect(() => { setUpdatedList(list)}, [list])


  return (
    <div className="task-list">
        {updatedList.length>0 ?  (<div>
        <ul>
        {
         updatedList.map(e=>{
         return  <li className= 'task-list--item' key={e.id}>
            {e.isComplete ? <PiCheckCircleFill className="pi-circle"  onClick={() =>{handleIncomplete(e)}} />: <PiCheckCircleLight  className="pi-circle" onClick={() =>{handleIncomplete(e)}} /> }
            {e.task}
            </li>
         })
        }
        </ul>
        </div>): <div> No tasks found </div> }
        <div className="archived-list">
            <Archived  archivedItems = {archived}/>
        </div>
      
        
    </div>
  )
};

export default Todo;
