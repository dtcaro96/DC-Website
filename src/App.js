import React, { useEffect, useHistory } from 'react';
import '@fontsource/roboto';
import HomePage from './Components/HomePage';
import NavbarMain from './Components/NavbarMain';
import AudioPage from './Components/AudioPage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';
import MusicPage from './Components/MusicPage';
import DevPage from './Components/DevPage'
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { useStyles } from './Styles/AppStyles';

const App = () => {

  //useStyles applies styles to components via classes
  const classes = useStyles();

  //This allows the view to be at the top of window when loading a new page
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
              path="/audio"
              render={() => <AudioPage className={classes.page} />}>
            </Route>
            <Route
              exact
              path="/music"
              render={() => <MusicPage className={classes.page} />}>
            </Route>
            <Route
              exact
              path="/dev"
              render={() => <DevPage className={classes.page} />}>
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