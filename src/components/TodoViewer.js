import React from "react";
import {connect} from "react-redux";
import Todo from "./Todo";
import {deleteTodoAC, setIsDoneAC} from "../Redux/Reducers/todoReducer";

const TodoViewer = (props) => {

    if (props.todos.length === 0) {
        return <h2>
            Заметок пока нет
        </h2>
    }

    const mappedTodos = props.todos.map(item => <Todo title={item.title} text={item.text} id={item.id}
                                                      done={item.done} deleteTodo={props.deleteTodo}
                                                      setIsDone={props.setIsDone} key={item.id}/>)

    return (
        <div>
            {mappedTodos}
        </div>)

}

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodoAC(id)),
        setIsDone: (id, done) => dispatch(setIsDoneAC(id, done))
    }
}


export const TodoViewerContainer = connect(mapStateToProps, mapDispatchToProps)(TodoViewer)

//export default TodoViewer