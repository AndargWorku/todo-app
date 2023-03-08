import React,{useState} from 'react'
import Form from "./Form"
import Todo from "./Todo"
const List = () => {
    const[tasks,setTasks]=useState([]);
    //to added new task to the list
   const addTask=task=>{
    // space remover ,to avoid adding empty space
    if(!task.text|| /^\s*$/.test(task.text)){
        return
    }
    // a spread that adds new values to existing array
    const newTasks=[task,...tasks]
    //set values new tasks
    setTasks(newTasks)
    //testing 
    //console.log(task,...tasks)
    //toggole the completed task  is true or false

   }
   const completeTask=id=>{
    let updateTask=tasks.map(task=>{
        if(task.id===id){
            task.isComplete=!task.isComplete
        }
        return task

    })
    setTasks(updateTask)
}
//delete the task
const deleteTask=id=>{
    const deleteArray=[...tasks].filter(task=>task.id!==id)
    setTasks(deleteArray)
}
//editing the task
const updateTask=(taskId,newValue)=>{
        // space remover ,to avoid adding empty space
        if(!newValue.text|| /^\s*$/.test(newValue.text)){
            return
        }
        setTasks(prev=>prev.map(item=>(item.id===taskId ? newValue:item)))

}
  return (
    <div className="container">
      <h1>add list the value</h1>
      <Form onSubmit={addTask}/>
      <div className='content-scroll'>
      <Todo  tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
     
    </div>
  )
}

export default List
