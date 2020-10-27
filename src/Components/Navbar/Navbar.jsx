import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
    <div>
      <div className={s.item}>
      <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div  className={s.item}>
      <NavLink to='/dialogs'>Message</NavLink>
      </div>
      <div  className={s.item}>
      <NavLink to='/users'>Users</NavLink>
      </div>
      <div  className={s.item}>
      <NavLink to='/news'>News</NavLink>
      </div>
      <div  className={s.item}>
      <NavLink to='/music'>Music</NavLink>
      </div>
      <div  className={s.item}>
      <NavLink to='/setting'>Setting</NavLink>
      </div>
      <div  className={s.itema}>
      <NavLink to='/SideBar'>SideBar</NavLink>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/David_Beckham_Nov_11_2007.jpg/185px-David_Beckham_Nov_11_2007.jpg'/> 
        </div>
      <div>
         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/David_Beckham_Nov_11_2007.jpg/185px-David_Beckham_Nov_11_2007.jpg'/>
         </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/David_Beckham_Nov_11_2007.jpg/185px-David_Beckham_Nov_11_2007.jpg'/>
        </div>
      </div>
     </div>
   </nav>
}

export default Navbar;