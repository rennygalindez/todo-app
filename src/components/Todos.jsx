import React from 'react';
import Todo from './Todo.jsx';

export default function Todos({todos}){

    return(
        <div>
            <h2>Tareas</h2>
            {todos.map((e)=><Todo {...e}/>)}
        </div>
    )
}


// e =  {id:1, description: "comprar" done:false}
// <Todo {...e}/>