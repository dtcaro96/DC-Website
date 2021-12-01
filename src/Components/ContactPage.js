import React, { useEffect, useRef, useState } from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useStyles } from '../Styles/ContactPageStyles'

export default function ContactPage () {

    const [isVerified, setVerified] = useState(false);
    const [isEmailSent, setEmailSent] = useState(false);
    const [isNameFull, setNameFull] = useState(null);
    const [isEmailFull, setEmailFull] = useState(null);
    const [isSubjectFull, setSubjectFull] = useState(null);
    const [isMessageFull, setMessageFull] = useState(null);


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

    const sendMessage = (e) => {
        e.preventDefault();
        if (isNameFull && isEmailFull && isSubjectFull && isMessageFull && isVerified) {
            sendEmail(e);
        } else if (isVerified && !isEmailFull || !isMessageFull || !isSubjectFull || !isNameFull) {
            alert('Please make sure all fields are filled before sending')
        } else {
            alert('Please verify you are not a robot')
        }
    }



    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Card className={classes.card}>
                <form ref={form} noValidate className={classes.form} onSubmit={sendMessage}>
                    {isEmailSent ? <Typography className={classes.thankYouTypography}>*Thanks For The Message!*</Typography> : <Typography className={classes.typography}>Send Me a Message!</Typography>}
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='name'>Name</label>
                        <input className={classes.input} type="text" name="name" onChange={e => setNameFull(!!e.target.value)}></input>
                    </div>
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='email'>Email</label>
                        <input className={classes.input} type="email" name="email" onChange={e => setEmailFull(!!e.target.value)}></input>
                    </div>
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='subject'>Subject</label>
                        <input className={classes.input} type="text" name="subject" onChange={e => setSubjectFull(!!e.target.value)}></input>
                    </div>
                    <div className={classes.inputBox}>
                        <label className={classes.label} for='message'>Message</label>
                        <textarea className={classes.messageInput} cols='30' rows='8' type="text" onChange={e => setMessageFull(!!e.target.value)} name="message"></textarea>
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
