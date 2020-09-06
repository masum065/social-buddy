import React from 'react';

const PostSingle = (porps) => {
  const { title, body } = porps.post;
  return (
    <>
      <h3>{title}</h3>
      <img
        style={{ width: '100%' }}
        src='https://placeimg.com/740/350/any'
        alt=''
      />
      <p>{body}</p>
    </>
  );
};

export default PostSingle;
