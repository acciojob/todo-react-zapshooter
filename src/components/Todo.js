import React from 'react'

function Todo({todos,deleteTask}){

  return(
    <ul className="todo-list">
    {
      todos.map((todo,index)=>(
        <li key={index} className="todo-item">
                {todo}
                <button onClick={()=>deleteTask(index)} className="delete-btn">Delete</button>
        </li>
      ))
    }
    </ul>
  )
  
}

export default Todo;
