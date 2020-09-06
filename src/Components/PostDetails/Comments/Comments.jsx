import React from 'react';
import { Grid } from '@material-ui/core';
import './Comments.css';

const Comments = (props) => {
  const { email, name, body } = props.comment;
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <div className='image'>
          <img src={props.picture} alt='' />
        </div>
      </Grid>
      <Grid item xs={9}>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{body}</p>
      </Grid>
    </Grid>
  );
};

export default Comments;
