import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100vh - 114px)',
        fontFamily: 'Roboto Mono, monospace',
        display: 'flex',
        margin: 'none',
        padding: 'none'
    },
    h1: {
        padding: 'none',
        margin: 'none'
    }
}));

export default function AboutPage () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <h1>Hi!</h1>
        </Container>
    )
}
