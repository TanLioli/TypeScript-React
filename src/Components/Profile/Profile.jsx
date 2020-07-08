import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return  <div className={s.content}>
    <div>
    <img src='https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3266-3366-4934-a538-646465646539__20180814_zaa_n230_31.jpg'/>
    </div>
    <div>
      ava+ description
    </div>
    <MyPosts/>
    </div>
}

export default Profile;