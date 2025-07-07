import React, { useState } from 'react'
import TodoCss from "./todo.module.css";
import toast from 'react-hot-toast';
import Task from './Task';

function Todo() {
  

let todotask=[
  {classA:'bca',compelete:false},
  {classA:'mca',compelete:false},
];

let [task,settask]=useState(" ");

let [todoall,settodo]=useState(todotask)

let [compeleteValue,setcompelet]=useState(" ")
let [uncompeleteValue,setuncompelet]=useState(" ")
let [totalTaskvalue,settotalTaskvalue]=useState(" ")


function handlesubmit(e){
  e.preventDefault();
  if (!task.trim()) {
    toast.error("Please add a task 😏");
  return
  }
  else{
    let verifytodo=todoall.some((value,index)=>{
    return value.classA.toLowerCase() === task.toLowerCase()
    })

    if(verifytodo){
      toast.error("Task allready added ❌")
      settask(" ")
    }
    else{
       settodo([...todoall,{classA:task,compelete:false}])
       toast.success("Task Added 🫠")
       settask(" ")
    }
  }
}


function handlecheck(id){
  let copyCheck=[...todoall]
  copyCheck[id].compelete = !copyCheck[id].compelete;
  settodo(copyCheck)


  let compeleteTask=copyCheck.filter((value,index)=>{
    return value.compelete
  })

  let uncompeleteTask=copyCheck.filter((value,index)=>{
    return !value.compelete
  })

  let totalTask=copyCheck.filter((value,index)=>{
    return value;
  })

  setcompelet(compeleteTask.length)
  setuncompelet(uncompeleteTask.length)
  settotalTaskvalue(totalTask.length)
}


function handledelete(id){
let copydeletecheck=[...todoall]
let filtervalue = copydeletecheck.filter((value,index)=>{
  return index!==id;
    
  })
  
  settodo(filtervalue)
}

function handleEdit(id){
let copyedittask=[...todoall]
let edittodolist=copyedittask[id].classA

let editvaluenew=prompt(`edit task :-${edittodolist}`,edittodolist)
const edit={classA:editvaluenew,compelete:false}

copyedittask.splice(id,1,edit)

settodo(copyedittask)
}

  return (
    <>
    <div className="conatiner">
      <div className="row">
        <div className="col-md-12">
    <div className="border border-danger-subtle px-5 py-3 rounded shadow p-3 mb-5 bg-white rounded ">
    <h2 className="text-center">To-Do App🚀</h2>
    <Task ctask={compeleteValue} utask={uncompeleteValue} ttask={totalTaskvalue}/>
    <form action="" onSubmit={handlesubmit}>
      <div>
        <input type="text" placeholder='add task here...'
        value={task}
        onChange={((e)=>settask(e.target.value))}
        />
       <button>Add Task</button>
      </div>
  
    
    { todoall.length===0? <p className='fs-6 text-danger'>no tast added 🤐</p>:
      todoall.map((item,index)=>(
       <ul key={index} className=" align-items-center justify-content-between px-3 py-1">
          <div className='mb-3'>
            <input type="checkbox" id="checkbox" 
             checked={item.compelete}
             onClick={()=>{
             handlecheck(index)
          }}
          /><span 
           style={{
                    textDecoration: item.compelete ? "line-through" : "none",}}
                    >{item.classA}</span>
          </div>
          <div>
            <i className="bi bi-pencil-square text-success px-3"
            onClick={()=>{
              handleEdit(index)
            }}
            ></i>

            <i className="bi bi-trash3" 
           onClick={()=>{
            handledelete(index)
          }}
           ></i></div>
       </ul>
      ))
    }
    </form>
   </div>
   </div>
   </div>
   </div>
    
    </>
  )
}

export default Todo
