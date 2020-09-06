import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/home'>
            <Header />
            <Home></Home>
          </Route>
          <Route path='/posts/:postId'>
            <Header />
            <PostDetails />
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
