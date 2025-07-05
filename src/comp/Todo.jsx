import React, { useState } from 'react'
import TodoCss from "./todo.module.css";



function Todo() {
  

let todotask=[
  {classA:'bca',compelete:false},
  {classA:'mca',compelete:false},
];

let [task,settask]=useState(" ");

let [todoall,settodo]=useState(todotask)

// let [listitem,setlistitem]= useState(todotask)


function handlesubmit(e){
  e.preventDefault();
 // console.log("task:",task)

 settodo([...todoall,{classA:task,compelete:true}])
 settask(" ")
}

function handlecheck(id){
  let copyCheck=[...todoall]
  copyCheck[id].compelete = !copyCheck[id].compelete;
  settodo(copyCheck)
}

function handledelete(id){
//  console.log(id)
let copydeletecheck=[...todoall]
let filtervalue = copydeletecheck.filter((value,index)=>{
  return index!==id;
    
  })
  //console.log(filtervalue)
  settodo(filtervalue)
}


  return (
    <>
    <div className="conatiner">
      <div className="row">
        <div className="col-md-12">
    <div className="border border-danger-subtle px-5 py-3 rounded shadow p-3 mb-5 bg-white rounded ">
    <h2 className="text-center">To-Do App🚀</h2>
    <form action="" onSubmit={handlesubmit}>
      <div>
        <input type="text" placeholder='add task here...'
        value={task}
        onChange={((e)=>settask(e.target.value))}
        />
       <button>Add Task</button>
      </div>
  
    
    { todoall.length===0? alert("no tast added😐"):
      todoall.map((item,index)=>(
       <ul key={index} className="justify-content-between px-3 py-1">
          <div>
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
          <div><i className="bi bi-trash3" 
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
