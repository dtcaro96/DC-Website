import React from 'react';
import '@fontsource/roboto'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter as Router, Link, withRouter } from 'react-router-dom'

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
    }
}));

function App () {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <Route>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={() => <HomePage className={classes.page} />}
                        >
                        </Route>
                        <Route
                            exact
                            path='/about'
                            render={() => <h1>Hello</h1>}
                        >
                        </Route>
                    </Switch>
                </Route>
            </div>

        </Router >
    )
}


export default App;