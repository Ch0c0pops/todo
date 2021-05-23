import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import todoReducer from "./Reducers/todoReducer"
import thunk from "redux-thunk"

const reducers = combineReducers({todos: todoReducer})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store