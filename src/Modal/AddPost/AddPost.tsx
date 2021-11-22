import React, { useState } from 'react';
import './AddPost.scss';
import axios from 'axios';

const AddPost = ({ active, setActive }: any) => {
  const URL = 'https://arcane-wildwood-90171.herokuapp.com/posts/';

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const [img, setImg] = useState('');

  const closeModal = () => {
    setActive(false);
  };

  const clearModalWindow = () => {
    setText('');
    setTitle('');
    setAuthor('');
  };

  const CreatePost = (e: any) => {
    e.preventDefault();
    const post = { title, text, author };
    axios.post(URL, post, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    clearModalWindow();
    setActive(false);
  };
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={closeModal} role="button">
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <form className="form-add-post" action="" method="">
          <div>
            <p>Post title </p>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <p>Post author </p>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            <p>Post text </p>
            <textarea
              className="post-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" onClick={CreatePost}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
