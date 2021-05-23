import axios from "axios";

const todoApi ={

   async  getAll(){
       return axios.get('http://localhost:5000/api/todos').then(
            response => response.data
        )
    },
    async deleteTodo(id){
       debugger
        return axios.delete(`http://localhost:5000/api/todos/?id=${id}`).then(
            response => response.data
        )
    }
}

export default todoApi

//апишка работает, осталось res дату, а именно id удаленной заметки выцепить и кинуть для фильтрации в редьюсер