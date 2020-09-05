import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';
import PostSingle from '../PostSingle/PostSingle';

const Home = () => {
  return (
    <>
      <Container>
        <Grid container justify='space-betwin' spacing={2}>
          <Grid style={{ marginTop: '22px' }} item xs={9}>
            <PostSingle />
            <PostSingle />
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
