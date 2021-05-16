const DELETE_TODO = 'DELETE_TODO'
const SET_IS_DONE = 'SET_IS_DONE'

export const deleteTodoAC = (props) => ({type: DELETE_TODO, id: props})
export const setIsDoneAC = (...props) => ({type: SET_IS_DONE, id: props[0], isDone: props[1]})


const initialState = {
    todos: [{
        title: "Купить пельменей",
        text: 'еще специй, воды, немного лука и бутылку джина',
        id: 1,
        done: false
    },

        {
            title: "Купить рыбы",
            text: 'еще водки, воды, немного лука и бутылку джина и мяса',
            id: 2,
            done: true
        }],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
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
        default:
            return state
    }
}


export default todoReducer