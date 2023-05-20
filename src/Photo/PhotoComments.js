import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../useContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comment, setComments] = useState('');
  const { login } = useContext(UserContext);

  const commentSection = useRef(null);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comment]);

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
        {comment.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
