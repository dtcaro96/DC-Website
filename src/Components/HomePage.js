import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useStyles } from '../Styles/HomePageStyles'
import { Parallax } from 'react-parallax'

export default function HomePage () {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Parallax className={classes.parallax} strength={500} bgImage='pics\PXL_20210314_154818194.jpg'>
      </Parallax>
      {/* <img
        src="pics\PXL_20210314_154818194.jpg"
        className={classes.photo}
      /> */}
      <div className={classes.title}>
        <h1>Audio/Software Engineer</h1>
      </div>
      <hr className={classes.hr} />
      <div className={classes.aboutHeader}>
        <h2 className={classes.h2}>Who Am I?</h2>
        <p className={classes.paragraph}>Technology professional with a passion for software development supported by 6+ years of client/customer service.
          <br></br>
          <br></br>
          Pivoting from a 3-year career in corporate audio engineering, I discovered my passion for the computer and software technologies that integrate within event-work to ensure a successful production.After studying hard and recently acquiring my Cisco CCNA certification, I enrolled as a student at NPower, a national non-profit aiming to jump start IT careers for young adults and military veterans.
          <br></br>
          <br></br>
          After the program I started a position as a Desktop Support Engineer at New York-based managed service provider, S7 Technology Group, performing end-user level support for corporate Windows environments.While doing so I also discovered my love for coding and application development.
          <br></br>
          <br></br>
          Soon after, I decided to study full-time on technologies such as HTML5, CSS3, JavaScript, React/Hooks, NodeJS, MongoDB, Express, MaterialUI and Bootstrap. I'm currently still in the middle of studies, while building my own applications/websites and building upon my skills in React. I'm also creating and playing a ton of music in my free time!</p>
      </div>
      <hr className={classes.hr} />
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            height="170"
            image="pics\adam-tagarro-d7iHitiPPog-unsplash.jpg"
            alt="drum photo"
          />
          <CardContent >
            <Typography className={classes.cardFont} gutterBottom variant="h5" component="div">
              Music
            </Typography>
            <Typography className={classes.cardFont} variant="body2" color="text.secondary">
              I play in, write and perform with acts consisting of either bands or music written by myself. I'm always looking to start a new project or jam. Check out some of the music I've been a part of the past few years.
            </Typography>
          </CardContent>
          <CardActions>
            <Link className={classes.buttonLink} exact to='/music'>
              <Button className={classes.cardButton} size="small">See Music</Button>
            </Link>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            height="170"
            image="pics\alexandre-debieve-UmX-OgGODfM-unsplash.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography className={classes.cardFont} gutterBottom variant="h5" component="div">
              Audio
            </Typography>
            <Typography className={classes.cardFont} variant="body2" color="text.secondary">
              After getting a degree in music production from SUNY Purchase, I continue to produce music to this day including songs by myself and by friends. Take a listen to some acts I've recorded over the years.
            </Typography>
          </CardContent>
          <CardActions>
            <Link className={classes.buttonLink} exact to='/audio'>
              <Button className={classes.cardButton} size="small">See Audio</Button>
            </Link>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            height="140"
            image="pics\markus-spiske-iar-afB0QQw-unsplash.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography className={classes.cardFont} gutterBottom variant="h5" component="div">
              Dev
            </Typography>
            <Typography className={classes.cardFont} variant="body2" color="text.secondary">
              Currently studying and practicing front-end development with some back-end technologies including Express, React, MongoDB and some others. Feel free to look at some of my projects here.
            </Typography>
          </CardContent>
          <CardActions>
            <Link className={classes.buttonLink} exact to='/dev'>
              <Button className={classes.cardButton} size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            height="140"
            image="pics\maarten-van-den-heuvel-risZYPun2ao-unsplash.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography className={classes.cardFont} gutterBottom variant="h5" component="div">
              Contact
            </Typography>
            <Typography className={classes.cardFont} variant="body2" color="text.secondary">
              Feel free to reach out to me with any inquiries including development, audio production, live sound and even songwriting. Prove you aren't a robot and I'll get back to you as soon as I can.
            </Typography>
          </CardContent>
          <CardActions>
            <Link className={classes.buttonLink} exact to='/contact'>
              <Button className={classes.cardButton} size="small">Contact Me</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
