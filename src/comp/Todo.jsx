import React, { useState } from 'react'
import TodoCss from "./todo.module.css";



function Todo() {
  

let todotask=[
  {classA:'bca',compelete:true},
  {classA:'mca',compelete:true},
];

let [task,settask]=useState("");

let [todoall,settodo]=useState(todotask)

// let [listitem,setlistitem]= useState(todotask)


function handlesubmit(e){
  e.preventDefault();
  console.log("task:",task)

 settodo([...todoall,{classA:task,compelete:false}])
}

function handlecheck(id){
  let copyCheck=[...todoall]
  copyCheck[id].compelete=!copyCheck[id].compelete;
  settodo[copyCheck]
  console.log(id)
}

  return (
    <>
    <div className="conatiner">
      <div className="row">
        <div className="col-md-12">
    <div class="border border-danger-subtle px-5 py-2 rounded shadow p-3 mb-5 bg-white rounded ">
    <h2 class="text-center">To-Do App🚀</h2>
    <form action="" onSubmit={handlesubmit}>
      <div>
        <input type="text" placeholder='add task here...'
        value={task}
        onChange={((e)=>settask(e.target.value))}
        />
       <button>Add Task</button>
      </div>
    </form>
    
    {
      todoall.map((item,index)=>(
       <ul key={index}>
          <input type="checkbox" name="" id="checkbox" 
          checked={item.compelete}
          onClick={()=>(
            handlecheck(index)
      )}
          /><span>{item.classA}</span>
       </ul>
      ))
    }
   </div>
   </div>
   </div>
   </div>
    </>
  )
}

export default Todo
