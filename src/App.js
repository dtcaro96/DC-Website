import React from 'react';
import '@fontsource/roboto';
import HomePage from './Components/HomePage';
import NavbarMain from './Components/NavbarMain';
import MusicPage from './Components/Music/MusicPage';
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
  page: {
    width: '100%',
    margin: 0,
    padding: 0,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Route>
          {/* // maxWidth on Container is set to false to stop MaterialUI from auto-enforcing a max-width */}
          <NavbarMain />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage className={classes.page} />}
            ></Route>
            <Route exact path="/about" render={() => <h1>Hello</h1>}></Route>
            <Route exact path="/music">
              <MusicPage />
            </Route>
          </Switch>
        </Route>
      </div>
    </Router>
  );
}

export default App;