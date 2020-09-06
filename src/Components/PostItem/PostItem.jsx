import React from 'react';
import './PostItem.css';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  const { title, body, id } = props.post;
  return (
    <Card style={{ marginBottom: '5px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link className='learnmore-btn' to={`/posts/${id}`}>
          <Button size='small' style={{ color: '#3399ff' }}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostItem;
