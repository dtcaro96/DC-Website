import React, { useEffect, useRef, useState } from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        fontFamily: 'Roboto Mono, monospace'
    },
    inputBox: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline',
    },
    card: {
        height: '50%',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.main.secondary,
        border: `3px solid ${theme.palette.main.lightText}`,
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
                alert('YOU ARE NOT VERIFIED')
        }
    };


    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Card className={classes.card}>
                {isEmailSent ? <h1>Thank You For Your Submission!</h1> : ''}
                <form ref={form} className={classes.form} onSubmit={tryEmail}>
                    <div className={classes.inputBox}>
                        <input className={classes.input} type="text" placeholder="Name" name="name"></input>
                    </div>
                    <div className={classes.inputBox}>
                        <input type="email" placeholder="Email" name="email"></input>
                    </div>
                    <div className={classes.inputBox}>
                        <input type="text" placeholder="Subject" name="subject"></input>
                    </div>
                    <div className={classes.inputBox}>
                        <textarea cols='30' rows='8' type="text" placeholder="Your message" name="message"></textarea>
                    </div>
                    <ReCAPTCHA
                        sitekey='6Lfo-80cAAAAALAjar8HZgAqdzVakwmWaDBSY_SG'
                        onChange={handleCaptcha}
                    />
                    <input type='submit' value='Send'></input>
                </form>
            </Card >
        </Container>
    )
}
