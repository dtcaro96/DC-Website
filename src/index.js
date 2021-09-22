import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

import App from './App'

const title = 'React with Webpack and Babel';

const theme = createTheme({
    palette: {
        main: {
            primary: '#da627d',
            secondary: '#a53860',
            darkText: '#450920',
            lightText: '#f9dbbd',
            thirdary: '#ffa5ab'
        }
    }
});


ReactDOM.render(
    (<MuiThemeProvider theme={theme}>
        <App title={title} />
    </MuiThemeProvider>),
    document.getElementById('app')
);

module.hot.accept();