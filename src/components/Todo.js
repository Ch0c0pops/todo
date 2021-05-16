import removeImg from "../img/remove.png";
import React from "react";

const Todo = (props) => {

    return <div className={'content__todoList-box' + (props.done ? '_done' : '')}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <input type='checkbox' onClick={()=>props.setIsDone(props.id, !props.done)}/>
        <div>
            <img src={removeImg} alt='TaskRemovingButton' onClick={()=>props.deleteTodo(props.id)}/>
        </div>
    </div>
}

export default Todo