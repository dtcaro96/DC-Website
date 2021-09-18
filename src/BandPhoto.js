import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    photoContainer: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
}));

export default function BandPhoto () {
    const classes = useStyles();
    return (
        <Container className={classes.photoContainer}>
            <img src='https://f4.bcbits.com/img/0007960984_10.jpg'></img>
        </Container>

    )
}
