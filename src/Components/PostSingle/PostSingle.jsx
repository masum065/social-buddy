import React from 'react';
import './PostSingle.css';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

const PostSingle = () => {
  return (
    <Card style={{ marginBottom: '5px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' style={{ color: '#3399ff' }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostSingle;
