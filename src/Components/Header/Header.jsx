import React from 'react';
import s from'./Header.module.css';
import { NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
    <img src='https://cdn.freelogovectors.net/wp-content/uploads/2018/08/dsquared2_logo.png'/>
    <div className={s.loginBlock}>
        {props.isAuth 
        ? <div> {props.login} - <button onClick={props.logout}>Log Out</button> </div>
        : <NavLink to={'/login'}>Login</NavLink>}

    </div>
    </header>
}

export default Header;