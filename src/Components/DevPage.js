import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../Styles/DevPageStyles';
import { Link } from 'react-router-dom';

export default function DevPage () {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography className={classes.infoHeader} variant='h3'>Dev</Typography>
                <div className={classes.subjectContainer}>
                    <Typography className={classes.subjectHeader} variant='h2'>Enthusiastic About Tech...</Typography>
                    <p className={classes.subjectParagraph}>
                        As I sparked a passion in software and web development, In April of 2021, I decided to leave my job in I.T. in order to full-time study and pursue a career in software.
                        <br />
                        <br />
                        During my time at my I.T. job, I discovered how important an efficient and user-friendly product/tool and was in order to streamline processes in tech infrastructure. I realized I wanted to be part of a team that brought these products to fruition and I decided to go into that direction.
                        <br />
                        <br />
                        As soon as I left, I started diving into a few online courses where I got to get my hands dirty with basic HTML, CSS, and Javascript, your basic web dev tools. Eventually when I felt comfortable with the basics I moved into some more complex frameworks and tools including React, Axios, API's, Material-UI, Bootstrap, MongoDB and also some backend technologies including REST concepts, Webpack, NodeJS and Express. I still continue to use my time to learn more and build upon the basic foundations of what I've learned so far.
                        <br />
                        <br />
                        As I've been learning, I've been working on projects of my own including this website, which is completely responsive! I absolutely love development and I'm super excited to break into the industry myself and learn more about the behind-the-scenes of software engineering. I can't wait to share more as I progress :) .

                    </p>

                </div>

                <div className={classes.logoContainer}>
                    <img className={classes.reactLogo} src='pics\React_Logo.png' />
                    <img className={classes.reactLogo} src='pics\JS_Logo.png' />
                    <img className={classes.reactLogo} src='pics\CSS_Logo.png' />
                    <img className={classes.reactLogo} src='pics\MongoDB_Logo.png' />
                    <img className={classes.reactLogo} src='pics\HTML_Logo.png' />
                    <img className={classes.reactLogo} src='pics\Node_Logo.png' />
                    <img className={classes.reactLogo} src='pics\Python_Logo.png' />
                    <img className={classes.reactLogo} src='pics\Bootstrap_Logo.png' />
                    <img className={classes.reactLogo} src='pics\MUI_Logo.png' />
                </div>
                <Link className={classes.downloadLink} exact to={{ pathname: 'https://docs.google.com/document/d/1Btz-oFDykbRCy8W6djzJDk_0hxHzg-LF6p-F9huIeSA/edit?usp=sharing' }} target="_blank">See Resume</Link>
            </div>
        </div>
    )
}
