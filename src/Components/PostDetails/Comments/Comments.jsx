import React from 'react';
import { Grid } from '@material-ui/core';
import './Comments.css';

const Comments = (props) => {
  const { email, name, body } = props.comment;
  return (
    <Grid className='comment-area' container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <div className='Comment-author'>
          <img src={props.picture} alt='' />
        </div>
      </Grid>
      <Grid item xs={7}>
        <h3 className='comment-author-name'>{name}</h3>
        <p className='comment-author-email'>{email}</p>
        <p className='comment'>{body}</p>
        <button className='replay-btn'>Replay</button>
      </Grid>
    </Grid>
  );
};

export default Comments;
