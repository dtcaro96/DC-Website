import React, { useEffect, useHistory } from 'react';
import '@fontsource/roboto';
import HomePage from './Components/HomePage';
import NavbarMain from './Components/NavbarMain';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';
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
    minHeight: '100vh',
    margin: 'none',
    padding: 'none',
    backgroundColor: theme.palette.main.primary
  },
  page: {
    width: '100%',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
  },
  NavbarMain: {
    shadows: ['none']
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '50px'
  },

}));



const App = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Router>
      <div className={classes.root}>
        <Route>
          {/* // maxWidth on Container is set to false to stop MaterialUI from auto-enforcing a max-width */}
          <NavbarMain className={classes.NavbarMain} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage className={classes.page} />}
            ></Route>
            <Route
              exact
              path="/about"
              render={() => <AboutPage className={classes.page} />}>
            </Route>
            <Route
              exact
              path="/music"
              render={() => <MusicPage className={classes.page} />}>
            </Route>
            <Route
              exact
              path="/contact"
              render={() => <ContactPage className={classes.page} />}>
            </Route>
            <Route
              render={() => <HomePage className={classes.page} />}
            >
            </Route>
          </Switch>
          <Footer className={classes.footer} />
        </Route>
      </div>
    </Router>
  );
}

export default App;