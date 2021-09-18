import React from 'react'
import BandPhoto from './BandPhoto';
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

export default function HomePage () {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <NavbarMain />
            <BandPhoto className={classes.bandPhoto}></BandPhoto>
        </Container>
    )
}
