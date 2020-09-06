import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';
import './PostDetails.css';
import PostSingle from './PostSingle/PostSingle';
import Comments from './Comments/Comments';

const PostDetails = () => {
  const { postId } = useParams();
  let countId = postId - 10;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const apiURL = `http://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  useEffect(() => {
    const apiURL = `http://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId]);

  const imageAPI = 'https://randomuser.me/api/portraits/men/';

  return (
    <div>
      <Container>
        <Grid container justify='space-between' spacing={2}>
          <Grid className='post-box' item xs={8}>
            <PostSingle post={post} />
            <h3 className='comment-title'>Comments</h3>
            {comments.map((comment) => (
              <Comments
                key={comment.id}
                picture={
                  comment.id < 50
                    ? `${imageAPI}/${comment.id}.jpg`
                    : `${imageAPI}/${countId--}.jpg`
                }
                comment={comment}
              ></Comments>
            ))}
          </Grid>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PostDetails;
