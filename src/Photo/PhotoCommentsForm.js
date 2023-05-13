import React, { useState } from 'react';
import { ReactComponent as Enviar } from '../Assets/enviar.svg';
import useFetch from '../Hooks/useFetch';
import Error from '../Components/Helper/Error';
import { COMMENT_POST } from '../api';

const PhotoCommentsForm = ({ id, setComment }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComment((comments) => [...comments, json]);
    }
  }

  return (
    <form>
      <textarea
        onSubmit={handleSubmit}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
