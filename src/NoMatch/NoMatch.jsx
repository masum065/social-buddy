import React from 'react';
import NotFond from '../Images/404_Error.png';
import { Button } from '@material-ui/core';
import './NotMatch.css';

const NoMatch = () => {
  const notMatching = {
    height: '100vh',
    background: `url(${NotFond})`,
    backgroundSize: 'contain',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  return (
    <div className='notMatch' style={notMatching}>
      <Button variant='contained' href='/home'>
        back to home
      </Button>
    </div>
  );
};

export default NoMatch;
