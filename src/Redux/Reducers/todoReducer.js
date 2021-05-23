import todoApi from "../../API/todoApi";

const DELETE_TODO = 'DELETE_TODO'
const SET_IS_DONE = 'SET_IS_DONE'
const ADD_TODO = 'ADD_TODO'
const GET_ALL_TODOS = 'GET_ALL_TODOS'

export const deleteTodoAC = (props) => ({type: DELETE_TODO, id: props})
export const setIsDoneAC = (...props) => ({type: SET_IS_DONE, id: props[0], isDone: props[1]})
export const addTodoAC = (props) => ({type: ADD_TODO})
export const getAllTodosAC = (todos) => ({type: GET_ALL_TODOS, todos})

export const getTodosThunk = ()=> (dispatch) => {
    todoApi.getAll().then(
        data => dispatch(getAllTodosAC(data))
    )
}
export const deleteTodoThunk = (id)=> (dispatch) => {
    debugger
    todoApi.deleteTodo(id).then(
        //response => dispatch(deleteTodoAC(response.id))
        response => console.log(response)
    )
}

const initialState = {
    // todos: [{
    //     title: "Купить пельменей",
    //     text: 'еще специй, воды, немного лука и бутылку джина',
    //     id: 1,
    //     done: false
    // },
    //
    //     {
    //         title: "Купить рыбы",
    //         text: 'еще водки, воды, немного лука и бутылку джина и мяса',
    //         id: 2,
    //         done: true
    //     }],
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
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo, done: action.isDone
                        }
                    }
                    return todo
                })

            }
           case ADD_TODO:
               return state //временная заглушка
        case GET_ALL_TODOS:
            return {
                ...state,
                todos: [...state.todos, ...action.todos]
            }

        default:
            return state
    }
}


export default todoReducer