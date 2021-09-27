import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerText: {
        color: theme.palette.main.lightText,
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'end',
        marginRight: '3rem',
        paddingBottom: '1rem',
        paddingTop: '1rem'
    }
}));

export default function Footer () {
    const classes = useStyles();
    return (
        <div className={classes.footerText}>
            <Typography variant='title'>© 2021; Daniel Caro</Typography>
        </div>
    )
}
