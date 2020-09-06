import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';
import PostItem from '../PostItem/PostItem';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiURL = 'http://jsonplaceholder.typicode.com/posts';
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <Container>
        <Grid container justify='space-between' spacing={2}>
          <Grid style={{ marginTop: '22px' }} item xs={9}>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Grid>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
