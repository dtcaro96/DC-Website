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
                        lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
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
                <Link className={classes.downloadLink} exact to={{ pathname: 'https://drive.google.com/file/d/1C42s-Wwf2FEMjNQUyQuPnrptapJqGpsV/view?usp=sharing' }} target="_blank">See Resume</Link>
            </div>
        </div>
    )
}
