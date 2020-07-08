import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://file.liga.net/images/general/2019/01/02/20190102212605-9245.jpg?v=1546463748'/>
        {props.message}
        <div>
          <span>Like</span>{props.likeCount}
            </div>
    </div>
}

export default Post;