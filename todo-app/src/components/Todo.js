import React,{useState} from "react";
import Form from "./Form";
import { TiEdit } from "react-icons/ti";
import {RiCloseCircleLine} from "react-icons/ri";

function Todo({tasks,completeTask,deleteTask,updateTask}){
    const[update,setUpdate]=useState({
        id:null,
        value:''
    })
    //for editing the task
    const submitUpdate=value=>{
        updateTask(update.id,value)
        setUpdate({
            id:null,
            value:''
        })
    }
    //adding the new filed form edting
    if(update.id){
        return <Form update={update} onSubmit={submitUpdate}/>
    }
    return  tasks.map((task,index)=>(
        <div className={task.isComplete ? 'task-row completed':'task-row'} key={index} >
            <div key={task.id} onClick={()=>completeTask(task.id)}>
                {task.text}
            </div>
            <div className='icons'>
                <TiEdit onClick={()=>setUpdate({id:task.id, value:task.text})}
                className='edit-icon'/>
                <RiCloseCircleLine 
                onClick={()=>deleteTask(task.id)}
                className='delete-icon'/>


            </div>
            
     </div>
    ))
};

export default Todo;