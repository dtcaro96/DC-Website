import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Roboto Mono, monospace',
        display: 'flex',
        height: '100%',
        minHeight: 'calc(100vh - 114px)',
        margin: 'none',
        padding: 'none',
        flexWrap: 'wrap',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 15rem 0 15rem',
        padding: '2rem',
        maxWidth: '55rem',
        backgroundColor: theme.palette.main.lightPrimary,
        borderRadius: '3px',
        [theme.breakpoints.up('xs')]: {
            margin: '0',
            padding: '1rem 1rem 1rem 1rem',
            fontSize: '0.3rem',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '1rem 2rem 1rem 2rem',
            margin: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: '60rem',
            margin: '5rem 5rem 5rem 5rem',
            maxWidth: '55rem',
            padding: '2rem',
            backgroundColor: theme.palette.main.lightPrimary,
            borderRadius: '3px',
            fontSize: '1rem',
        },
    },
    infoHeader: {
        fontFamily: 'inherit',
        color: theme.palette.main.lightText,
        fontWeight: '700',
        [theme.breakpoints.up('xs')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
            fontFamily: 'inherit',
            color: theme.palette.main.lightText,
            fontSize: '3rem'
        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    subjectContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderTop: `1px solid ${theme.palette.main.lightText}`,
        marginTop: '0.8rem',
        paddingTop: '1rem',

    },
    subjectHeader: {
        fontFamily: 'inherit',
        color: theme.palette.main.lightText,
        fontSize: '2rem',
        fontWeight: '700',
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    subjectParagraph: {
        color: theme.palette.main.lightText,
        textAlign: 'justify',
        marginTop: '0.2rem',
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.8rem',
            marginTop: '0.4rem'
        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    }
}));

export default function AboutPage () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography className={classes.infoHeader} variant='h3'>Audio</Typography>
                <div className={classes.subjectContainer}>
                    <Typography className={classes.subjectHeader} variant='h2'>Production</Typography>
                    <p className={classes.subjectParagraph}>
                        lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
                    </p>
                </div>
                <div className={classes.subjectContainer}>
                    <Typography className={classes.subjectHeader} variant='h2'>Live Sound</Typography>
                    <p className={classes.subjectParagraph}>
                        lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
                    </p>
                </div>


            </div>
        </div>
    )
}