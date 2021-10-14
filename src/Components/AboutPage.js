import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        fontFamily: 'Roboto Mono, monospace'
    }
}));

export default function AboutPage () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <h1>About Page</h1>
        </Container>
    )
}
