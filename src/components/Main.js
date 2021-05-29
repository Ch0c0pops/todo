import React from "react";
import viewAll from '../img/viewAll_img.png'
import createNew from '../img/create.png'
import {NavLink} from "react-router-dom"

const Main = () => {

    const navLinkStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return <div className='content__main-box'>

        <NavLink style={navLinkStyle} to='/createTodo'>
            <div className='content__main-icon'>
                <p>Создайте новую заметку</p>
                <img src={createNew}
                     alt='createNew_img'/>
            </div>
        </NavLink>

        <NavLink style={navLinkStyle} to='/todoList'>
            <div className='content__main-icon'>
                <p>Открыть список заметок</p>
                <img src={viewAll}
                     alt='viewAll_img'/>
            </div>
        </NavLink>

    </div>
}

export default Main