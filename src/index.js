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
            lightPrimary: '#ed8494',
            darkPrimary: '#c14e70',
            darkText: '#450920',
            medText: '#762141',
            lightText: '#f9dbbd',
            lightMedText: '#fbceb9',
            lightMedMedText: '#fcc0b4',
            thirdary: '#ffa5ab',

        }
    }
});


ReactDOM.render(
    (<MuiThemeProvider theme={theme}>
        <App title={title} style='height:100%;' />
    </MuiThemeProvider>),
    document.getElementById('app')
);

module.hot.accept();