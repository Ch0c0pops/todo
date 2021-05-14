import React from "react";
import {NavLink} from "react-router-dom";
import '../App.scss';

const Nav = () => {
    return <div className='nav__menu'>

        <NavLink to='/'>Main</NavLink>
        <NavLink to='/createTodo'>create new</NavLink>
        <NavLink to='/todolist'>view Todos</NavLink>

    </div>
}

export default Nav