import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/Preloader/FormControl/FormControls';

const maxLength10 =  maxLengthCreator(10);

const MyPosts = (props) => {

  let postElements = 
      props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  
    return <div className={s.postsBlock}>
    <h3>My post</h3>
    <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.post}>
      {postElements}
       
    </div> 
    </div>
  }

  const AddNewPostForm = (props) => { 
    return (
      <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component={Textarea} placeholder='post message' validate={[required, maxLength10]}/>
      
      </div>
      <div>
        <button>OK</button>
        </div>
        </form>
    )
  }

  const AddNewPostFormRedux = reduxForm ({form: 'profileAddNewPostForm'})(AddNewPostForm)

 export default MyPosts;