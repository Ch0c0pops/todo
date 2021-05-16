import {combineReducers, createStore} from '@reduxjs/toolkit'
import todoReducer from "./Reducers/todoReducer";

const reducers = combineReducers({todos: todoReducer})

const store = createStore(reducers)

window.store = store

export default store