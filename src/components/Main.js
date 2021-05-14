import React from "react";
import viewAll from '../img/viewAll_img.png'
import createNew from '../img/create.png'

const Main=()=>{
    return <div className='content__box'>

        <div className='content__icon'>
            <p>Создайте новую заметку</p>
            <img src={createNew}
                 alt='createNew_img'/>
        </div>

        <div className='content__icon'>
            <p>Открыть список заметок</p>
            <img src={viewAll}
                 alt='viewAll_img'/>
        </div>

    </div>
}

export default Main