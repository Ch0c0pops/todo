import todoApi from "../../API/todoApi";

const DELETE_TODO = 'DELETE_TODO'
const SET_IS_DONE = 'SET_IS_DONE'
const ADD_TODO = 'ADD_TODO'
const GET_ALL_TODOS = 'GET_ALL_TODOS'

export const deleteTodoAC = (props) => ({type: DELETE_TODO, id: props})
export const setIsDoneAC = (props) => ({type: SET_IS_DONE, id: props._id, isDone: props.isDone})
export const addTodoAC = (todoData) => ({type: ADD_TODO, todo: todoData})
export const getAllTodosAC = (todos) => ({type: GET_ALL_TODOS, todos})

export const getTodosThunk = () => (dispatch) => {
    todoApi.getAll().then(
        data => dispatch(getAllTodosAC(data))
    )
}
export const deleteTodoThunk = (id) => (dispatch) => {
    todoApi.deleteTodo(id).then(
        response => dispatch(deleteTodoAC(response._id))
    )
}
export const addTodoThunk = (todo) => (dispatch) => {
     todoApi.addTodo(todo).then(
        todoData => dispatch(addTodoAC(todoData))
    )
}

export const setIsDoneThunk =(id, isDone)=> async (dispatch)=>{
    const data = await todoApi.setIsDone(id, isDone)
    dispatch(setIsDoneAC(data))
    dispatch(getTodosThunk())
}

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos].filter(todo => todo._id !== action.id)
            }
        case SET_IS_DONE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, isDone: action.isDone} : todo),
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case GET_ALL_TODOS:
            return {
                ...state,
                //todos: [...state.todos, ...action.todos]
                todos: [...action.todos]
            }

        default:
            return state
    }
}


export default todoReducer