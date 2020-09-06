import React from 'react';
import './Header.css';
import { Container, Grid, Button } from '@material-ui/core';
import MainMenu from '../MainMenu/MainMenu';
import Search from '../Search/Search';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../Images/logo.png';

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={Logo} alt='' />
      </div>

      <section style={{ background: '#3399ff' }}>
        <Container>
          <Grid container direction='row' justify='space-between'>
            <Grid item xs={8}>
              <MainMenu />
            </Grid>
            <Grid style={{ textAlign: 'right' }} item xs={4}>
              <div className='serach-box'>
                <Search />
                <Button>
                  <SearchIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Header;
