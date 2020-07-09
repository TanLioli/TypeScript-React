import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.postsBlock}>
    <h3>My post</h3>
    <div>
      <div>
      <textarea></textarea>
      </div>
      <div>
        <button>OK</button>
        </div>
      </div>
      <div className={s.post}>
      <Post message='Hi Andrey!' likesCount='like 7'/>
      <Post message='Hi Sergey!' likesCount='like 2'/>
    
    </div> 
    </div>
  }

  export default MyPosts;