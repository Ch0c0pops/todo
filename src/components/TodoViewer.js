import React, {useEffect} from "react";
import {connect} from "react-redux";
import Todo from "./Todo";
import {getTodosThunk, deleteTodoThunk, setIsDoneThunk} from "../Redux/Reducers/todoReducer";

const TodoViewer = (props) => {

    useEffect(() => {
        props.getTodos()
    }, [])

    if (props.todos.length === 0) {
        return <h2>
            Заметок пока нет
        </h2>
    }

    const mappedTodos = props.todos.map(item => <Todo title={item.title} text={item.text} id={item._id}
                                                      isDone={item.isDone} deleteTodo={props.deleteTodo}
                                                      setIsDone={props.setIsDone} key={item._id + Math.random()}
    />)

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
        deleteTodo: (id) => dispatch(deleteTodoThunk(id)),
        setIsDone: (id, done) => dispatch(setIsDoneThunk(id, done)),
        getTodos: () => dispatch(getTodosThunk())
    }
}


export const TodoViewerContainer = connect(mapStateToProps, mapDispatchToProps)(TodoViewer)
