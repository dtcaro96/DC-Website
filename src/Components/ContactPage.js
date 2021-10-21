import React, { useEffect, useRef, useState } from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 114px)',
        fontFamily: 'Roboto Mono, monospace',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        marginBottom: '2rem'
    },
    inputBox: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        width: '100%',
        [theme.breakpoints.up('xs')]: {

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
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25rem',
        height: '3rem',
        borderRadius: '3px',
        border: '0',
        marginTop: '10px',
        marginBottom: '10px',
        color: theme.palette.main.darkText,
        fontSize: '1.5rem',
        [theme.breakpoints.up('xs')]: {
            width: '13rem',
            height: '2rem',
            marginRight: '1rem',
            fontSize: '.8rem',
            marginBottom: '5px',
            marginTop: '5px',
            fontFamily: 'inherit'
        },
        [theme.breakpoints.up('sm')]: {
            height: '3rem',
            width: '22rem',
            marginRight: '2rem',
            marginBottom: '15px',
            fontSize: '1.2rem'
        },
        [theme.breakpoints.up('md')]: {
            marginRight: '4rem',
            width: '26rem'
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: '6rem',
            width: '30rem'
        },
        [theme.breakpoints.up('xl')]: {
        }
    },
    messageInput: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '2rem',
        width: '25rem',
        height: '10rem',
        borderRadius: '3px',
        border: '0',
        marginTop: '10px',
        marginBottom: '20px',
        color: theme.palette.main.darkText,
        fontSize: '1.5rem',
        fontFamily: 'inherit',
        [theme.breakpoints.up('xs')]: {
            fontSize: '.8rem',
            height: '6rem',
            width: '13rem',
            marginRight: '1rem',
            marginBottom: '14px',
            marginTop: '5px'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.2rem',
            height: '9rem',
            width: '22rem',
            marginRight: '2rem',
            marginBottom: '20px',
            marginTop: '5px'
        },
        [theme.breakpoints.up('md')]: {
            marginRight: '4rem',
            width: '26rem',
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: '6rem',
            width: '30rem'
        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('xs')]: {
            margin: '0',
            height: '100%',
            width: '100%',
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
    card: {
        height: '50rem',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.main.secondary,
        border: `1px solid ${theme.palette.main.lightText}`,
        marginLeft: 'auto',
        boxShadow: 'none',
        marginRight: 'auto',
        marginTop: '5rem',
        marginBot: '10rem',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: '30rem',
            marginTop: '2rem',
            padding: '0'
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            height: '45rem'
        },
        [theme.breakpoints.up('md')]: {
            width: '70%'

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    label: {
        color: theme.palette.main.lightText,
        fontWeight: '700',
        fontSize: '2rem',
        [theme.breakpoints.up('xs')]: {
            fontSize: '1rem',
            fontWeight: '400',
            marginLeft: '1rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.7rem',
            marginLeft: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '4rem'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '6rem'
        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    typography: {
        color: theme.palette.main.lightText,
        fontWeight: '700',
        fontSize: '3rem',
        fontFamily: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4rem',
        [theme.breakpoints.up('xs')]: {
            marginTop: '0',
            marginBottom: '1.2rem',
            marginRight: '1rem',
            marginLeft: '1rem',
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5rem',
            marginBottom: '3rem'
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    captcha: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('xs')]: {

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
    spacer: {
        height: '21rem'
    },
    button: {
        backgroundColor: theme.palette.main.secondary,
        color: theme.palette.main.lightText,
        border: `3px solid ${theme.palette.main.lightText}`,
        borderRadius: '3px',
        boxShadow: `2px 2px 2px ${theme.palette.main.darkText}`,
        height: '2rem',
        width: '7rem',
        marginTop: '18px',
        fontFamily: 'inherit',
        fontSize: '1rem',
        fontWeight: '700',
        transition: 'all 100ms',
        '&:hover': {
            boxShadow: 'none',
            transform: 'translate(0.1em, 0.1em)',
            backgroundColor: theme.palette.main.primary,
            cursor: 'pointer'
        },
        '&:active': {
            backgroundColor: theme.palette.main.primary,
        },
        [theme.breakpoints.up('sm')]: {
            height: '3rem',
            width: '10rem',
            fontSize: '1.5rem'

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    h1: {
        margin: 0,
        color: theme.palette.main.lightText,
        fontWeight: 700,
        marginBottom: '2rem',
        marginTop: '2rem'

    }
}));



export default function ContactPage () {

    const [isVerified, setVerified] = useState(false);
    const [isEmailSent, setEmailSent] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const form = useRef();

    const handleCaptcha = () => {
        setVerified(!isVerified)
    }

    const emailSent = () => {
        setEmailSent(!isEmailSent)
    }

    const sendEmail = (e) => {
        emailjs.sendForm('danielcaro_template', 'template_qbm536o', form.current, 'user_avHPc9Borcc7flhZFJdZz');
        emailSent();
        e.target.reset();
    }

    const tryEmail = (e) => {
        e.preventDefault();
        {
            isVerified ? sendEmail(e) :
                alert('Please prove you are not a robot!')
        }
    };


    const classes = useStyles();
    return (
        <Container className={classes.root}>

            <Card className={classes.card}>
                <form ref={form} className={classes.form} onSubmit={tryEmail}>
                    {isEmailSent ? <Typography className={classes.typography}>*Thanks For The Message!*</Typography> : <Typography className={classes.typography}>Send Me a Message!</Typography>}
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='name'>Name</label>
                        <input className={classes.input} type="text" name="name"></input>
                    </div>
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='email'>Email</label>
                        <input className={classes.input} type="email" name="email"></input>
                    </div>
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='subject'>Subject</label>
                        <input className={classes.input} type="text" name="subject"></input>
                    </div>
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='message'>Message</label>
                        <textarea className={classes.messageInput} cols='30' rows='8' type="text" name="message"></textarea>
                    </div >
                    <div className={classes.captcha}>
                        <ReCAPTCHA
                            sitekey='6Lfo-80cAAAAALAjar8HZgAqdzVakwmWaDBSY_SG'
                            onChange={handleCaptcha}
                            className={classes.verify}
                        />
                    </div>
                    <input className={classes.button} type='submit' value='Send'></input>
                </form>
            </Card >
        </Container>
    )
}
