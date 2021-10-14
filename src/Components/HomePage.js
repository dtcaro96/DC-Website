import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.main.primary,
    height: '100%',
  },
  breakbar: {
    height: '2em'
  },
  photo: {
    width: '100%',
    margin: 'auto',
    display: 'block',
  },
  aboutHeader: {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.main.lightText,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '3rem',
    marginLeft: '3rem',
    [theme.breakpoints.up('sm')]: {
      margin: ' 5rem 5rem 5rem 5rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '8rem 10rem 8rem 10rem',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '8rem 20rem 8rem 20rem',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '20rem 25rem 20rem 25rem',
    },
  },
  iframe: {
    border: 0,
    width: '350px',
    height: '470px',
    color: theme.palette.main.darkText,
    borderRadius: '2%'
  },
  iframeContainer: {
    display: 'flex',
    justifyContent: 'center',
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
    margin: '3rem 3rem 3rem 3rem',
    [theme.breakpoints.up('sm')]: {
      margin: '5rem 5rem 5rem 5rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '5rem 10rem 8rem 10rem',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '5rem 20rem 5rem 20rem',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '10rem 20rem 10rem 20rem',
    }
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
        src="https://f4.bcbits.com/img/0007960984_10.jpg"
        className={classes.photo}
      />
      <div className={classes.breakbar} />\
      <Zoom>
        <div className={classes.title}>
          <h1>Audio/Software Engineer</h1>
        </div>
      </Zoom>
      <Zoom>
        <div className={classes.aboutHeader}>
          <h2>Who is he?</h2>
          <p>Daniel Caro is a world class audio engineer and software engineer with over 8 years experience in audio as well as 6 months of coding experience. Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonum lorem, sed diam nonum nibh lorem. Lorem ipsum dolor sit amet, consect lorem, sed diam nonum lorem, sed diam nonum nibh lorem lorem. Lorem ipsum dolor sit amet, consect lorem lorem, sed diam nonum lorem, sed diam nonum nibh lorem lorem. Lorem ipsum dolor sit amet, lorem</p>
        </div>
      </Zoom>
      <div className={classes.breakbar} />
      <Zoom>
        <div className={classes.iframeContainer}>
          <iframe className={classes.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=1698779177/size=large/bgcol=da627d/linkcol=a53860/tracklist=false/transparent=true/" seamless><a href="https://havenfield.bandcamp.com/album/color">Color by Havenfield</a></iframe>
        </div>
      </Zoom>
      <div className={classes.breakbar} />
      <Zoom>
        <div className={classes.aboutHeader}>
          <h2>Who is he?</h2>
          <p>Daniel Caro is a world class audio engineer and software engineer with over 8 years experience in audio as well as 6 months of coding experience. Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonum lorem, sed diam nonum nibh lorem. Lorem ipsum dolor sit amet, consect lorem, sed diam nonum lorem, sed diam nonum nibh lorem lorem. Lorem ipsum dolor sit amet, consect lorem lorem, sed diam nonum lorem, sed diam nonum nibh lorem lorem. Lorem ipsum dolor sit amet, lorem</p>
        </div>
      </Zoom>

    </div>
  );
}
