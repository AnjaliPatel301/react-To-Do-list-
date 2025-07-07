import React from 'react'
import TaskCss from "./task.module.css"
function Task(props) {

  const {ctask,utask,ttask}=props;
  return (
    <div>
        <section className={TaskCss.task_container}>
            <div className={TaskCss.task_heading}>Task Compelete :-<p>{ctask}</p></div>
            <div className={TaskCss.task_compelete}>{utask}/{ttask}</div>
        </section>
    </div>
  )
}

export default Task
