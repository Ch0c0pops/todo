import React from "react";
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import CreateTodo from "./components/CreateTodo";
import Main from "./components/Main";
import {TodoViewerContainer} from "./components/TodoViewer";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <div className='header'>
                   <h1>Мои заметки</h1>
                </div>

                <div className='nav'>
                    <Nav/>
                </div>

                <div className='content'>
                    <Switch>
                        <Route exact path='/' render={() => <Main/>}/>
                        <Route path='/createTodo' render={() => <CreateTodo/>}/>
                        <Route path='/todolist' render={() => <TodoViewerContainer/>}/>
                    </Switch>
                </div>
                <div className='footer'>
                    <h3>Ch0c0pops, 2018</h3>
                </div>


            </BrowserRouter>

        </div>
    );
}

export default App;
