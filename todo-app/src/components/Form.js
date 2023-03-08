import React,{useState,useRef,useEffect} from 'react'

const Form = (props) => {

    const[input,setInput]=useState();
    // prevent refreshing the submit
const submitHandler=e=>{
    e.preventDefault();
    // receiving props
    props.onSubmit({
        id:Math.floor(Math.random()*1000),//generate random id
        text:input
    })
}
// record the input file
    const changeHandler=e=>{
        setInput(e.target.value)
       // console.log(e.target.value)
    
    }
    // fix auto focusing in the filed

const inputRef=useRef(null)
 useEffect(()=>{
    inputRef.current.focus()
})

  return (
    <form className='task-form' onSubmit={submitHandler}>
        {props.update ? (
            <>
      <input type='text' 
      placeholder='update-task' 
      value={input}  
      name='text' 
      className='task-input form-control' 
      onChange={changeHandler}
      ref={inputRef}/>
       <br/>
      <button className='task-button btn btn-secondary'>Update task</button>
            </>
        ):(
            <>
    <input type='text' 
      placeholder='add-task' 
      value={input}  
      name='text' 
      className='task-input form-control' 
      onChange={changeHandler}
      ref={inputRef}/>
       <br/>
      <button className='task-button btn btn-secondary'>Add task</button>
            </>
        )}

     
    </form>
  )
}

export default Form
