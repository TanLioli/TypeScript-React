import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message =(props) => {
    return  <div className={s.message}>{props.message}</div>

}

const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name='Andrey' id='1' />
            <DialogItem name='Artem' id='2' />
            <DialogItem name='Timur' id='3' />
            <DialogItem name='Sveta' id='4' />
            <DialogItem name='Tania' id='5' />
            <DialogItem name='Alisa' id='6' />
         </div>
        <div className={s.messages}>
            <Message message='Hi more'/>
            <Message message='good morning'/>
            <Message message='gut evening'/>
            
        </div>
    </div>
}

export default Dialogs;