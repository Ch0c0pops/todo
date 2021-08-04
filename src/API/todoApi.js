import axios from "axios";

const todoApi = {

    getAll() {
        try {
            return axios.get('http://localhost:5000/api/todos').then(
                response => response.data
            )
        } catch (e) {
            console.log(e.response)
        }
    },

    deleteTodo(id) {
        try {
            return axios.delete(`http://localhost:5000/api/todos/?id=${id}`).then(
                response => response.data
            )
        } catch (e) {
            console.log(e.response)
        }
    },
    addTodo(todo) {
        try {
            return axios.post('http://localhost:5000/api/todos', {...todo}).then(
                response => response.data
            )
        } catch (e) {
            console.log(e.response)
        }
    },
    setIsDone(id, isDone) {
        try {
           return axios.put('http://localhost:5000/api/todos', {id, isDone}).then(
                response => response.data
            )
        } catch (e) {

        }
    }
}

export default todoApi

//апишка работает, осталось res дату, а именно id удаленной заметки выцепить и кинуть для фильтрации в редьюсер