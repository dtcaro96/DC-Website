import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.main.primary,
    height: '100%',
    fontFamily: 'Roboto Mono, monospace'
  },
  photo: {
    width: '100%',
    maxWidth: '1438px',
    margin: 'auto',
    display: 'block',
    marginTop: '2rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '0'
    },
  },
  aboutHeader: {
    fontFamily: 'inherit',
    fontSize: '',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.main.lightText,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '2rem',
    marginLeft: '2rem',
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: theme.palette.main.lightPrimary,
    padding: '2rem 2rem 2rem 2rem',
    borderRadius: '3px',
    [theme.breakpoints.up('sm')]: {
      margin: ' 0 2rem 0 2rem',
      padding: '2rem 2rem 2rem 2rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0rem 4rem 0rem 4rem',
      padding: '2rem 6rem 2rem 6rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0rem 8rem 0rem 8rem',
      padding: '2rem 8em 2rem 8rem'
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0rem 25rem 0rem 25rem',
    },
  },
  iframe: {
    border: 0,
    width: '350px',
    height: '470px',
    color: theme.palette.main.darkText,
    borderRadius: '3px',
    margin: '2rem',
    [theme.breakpoints.up('xs')]: {
      marginBottom: '0',
      marginTop: '0'

    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: '0rem',
      marginTop: '2rem'

    },
    [theme.breakpoints.up('md')]: {
      margin: '2rem 5rem 2rem 5rem'

    },
    [theme.breakpoints.up('lg')]: {

    }
  },
  iframeContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]: {
      margin: '0rem 5rem 0rem 5rem',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0rem 10rem 0rem 10rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0rem 8rem 0rem 8rem',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0rem 10rem 0rem 10rem',
    }

  },
  footer: {
    backgroundColor: theme.palette.main.secondary,
  },
  title: {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.main.lightText,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 3rem 0 3rem',
    [theme.breakpoints.up('sm')]: {
      margin: '4rem 5rem 0rem 5rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '4rem 10rem 0rem 10rem',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '4rem 20rem 0rem 20rem',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '4rem 20rem 0rem 20rem',
    }
  },
  paragraph: {
    textAlign: 'justify',
    fontFamily: 'Roboto Mono, monospace'
  },
  bandcampContainer: {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '',
    fontWeight: 400,
    lineHeight: 1.5,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    color: theme.palette.main.lightText,
  },
  h2: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Roboto Mono, monospace',
    marginTop: 0,
    marginBottom: '2rem',
  },
  hr: {
    backgroundColor: theme.palette.main.lightText,
    height: '1px',
    boxShadow: 'none',
    border: 'none',
    width: '90%',
    marginTop: '2rem',
    marginBottom: '2rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: '4rem',
      marginBottom: '4rem',
    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]: {
      margin: '0rem 2rem 0rem 2rem',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0rem 5rem 0rem 5rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0rem 2rem 0rem 2rem',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0rem 10rem 0rem 10rem',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0rem 8rem 0rem 8rem',
    }
  },
  card: {
    color: theme.palette.main.lightText,
    backgroundColor: theme.palette.main.lightPrimary,
    width: '400px',
    marginBottom: '2rem',
    borderRadius: '3px',
    boxShadow: 'none'
  },
  cardButton: {
    color: theme.palette.main.lightText,
    backgroundColor: theme.palette.main.secondary,

    '&:hover': {
      backgroundColor: theme.palette.main.medText
    }
  },
  buttonLink: {
    textDecoration: 'none',
  }
}));

export default function HomePage () {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <img
        src="pics\PXL_20210314_154818194.jpg"
        className={classes.photo}
      />
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
          Soon after, I decided to study full-time on technologies such as HTML5, CSS3, JavaScript, React/Hooks, NodeJS, MongoDB, Express, MaterialUI and Bootstrap.I'm currently still in the middle of studies, while building my own applications/websites and building upon my skills in React. I'm also creating and playing a ton of music in my free time!</p>
      </div>
      <hr className={classes.hr} />
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            height="170"
            image="pics/FB_IMG_1571549442394.jpg"
            alt="drum photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Music
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            image="pics/IMG_20200204_092540.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Audio
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            image="https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dev
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            image="https://images.squarespace-cdn.com/content/v1/5cbf6245f4e5311aabbdca11/1584497803228-81638MGINNONP2ZYUVNS/011720NYRE-6249%2Bcopy.jpg?format=1500w"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
