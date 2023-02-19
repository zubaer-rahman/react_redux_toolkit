import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(e.target.value);
  
  const onSavePostClicked = () => {
    if(title && content){
        dispatch(
            postAdded(title, content, userId)
        )
        setTitle('');
        setContent('');
    }
  };

  const usersOptions = users.map(user=> {
    return <option key={user.id} value={user.id}>
        {user.name}
    </option>
  })

  const canSave = Boolean(title) && Boolean(content) && Boolean (userId);
  return ( 
    <section style={{dipslay: "flex"}}>
        <h2> Add a New Post</h2>
        <label htmlFor="postTitle"> Post Title: </label>
        <input 
         type="text"
         id='postTitle'
         name='postTitle'
         value={title}
         onChange= {onTitleChanged}
        />
        <label htmlFor="postAuthor"> Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
        </select>
 
        <label htmlFor="postContent">Content: </label>
        <textarea 
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
        />
       
        <button 
            onClick={onSavePostClicked} 
            type='button'
            disabled= {!canSave}
        >
            Save Post
        </button>
    </section>
  )
};

export default AddPostForm;