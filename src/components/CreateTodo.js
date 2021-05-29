import React from "react";
import {Form, Field} from 'react-final-form'
import {addTodoThunk} from "../Redux/Reducers/todoReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const CreateTodo = (props) => {

    const [toggleRedirect, setToggleRedirect] = React.useState(false)

    const onSubmit = (data) => {
        props.addTodoThunk(data)
        setToggleRedirect(true)
    }
    const validate = () => {
    }
    if (toggleRedirect) {
        return <Redirect to='/todoList'/>
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <h2>Добавить заметку</h2>
                    <div>
                        <label>Заголовок</label>
                        <Field name="title" component="input" placeholder="Заголовок"/>
                    </div>

                    <div>
                        <label>Содержание</label>
                        <Field name="text" component="input" placeholder="Введите текст"/>
                    </div>


                    <button type="submit">Submit</button>
                </form>
            )}
        />

    )
}
const mapStateToProps = (state) => {
    return {}
}
export const ConnectedCreateTodo = connect(mapStateToProps, {addTodoThunk})(CreateTodo)
//export default CreateTodo