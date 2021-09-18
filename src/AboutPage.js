import React from 'react'
import NavbarMain from './NavbarMain';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    }
}));

export default function AboutPage () {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <NavbarMain />
        </Container>
    )
}
