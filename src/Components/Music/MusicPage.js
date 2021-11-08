import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


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
      maxHeight: '80rem'
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
    [theme.breakpoints.up('lg')]: {
    },
    [theme.breakpoints.up('xl')]: {

    }
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
  infoParagraph: {
    fontFamiy: 'inherit',
    color: theme.palette.main.lightText,
    textAlign: 'justify',
    borderTop: `1px solid ${theme.palette.main.lightText}`,
    paddingTop: '1rem',
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.8rem',
      marginTop: '0.5rem'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      fontFamiy: 'inherit',
      marginTop: '1rem',
      color: theme.palette.main.lightText,
      textAlign: 'justify',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  buttonContainer: {
    marginTop: '1rem',
    paddingTop: '1.5rem',
    marginBottom: '1.8rem',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderTop: `1px solid ${theme.palette.main.lightText}`,
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.8rem',
      paddingTop: '1rem',
      paddingBottom: '0'
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
  },
  activeButton: {
    border: 'none',
    padding: '0.8rem 1rem 0.8rem 1rem',
    borderRadius: '3px',
    fontFamily: 'inherit',
    fontWeight: '700',
    fontSize: '1em',
    color: theme.palette.main.lightText,
    backgroundColor: theme.palette.main.primary,
    [theme.breakpoints.up('xs')]: {
      marginTop: '1rem'
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
  button: {
    border: 'none',
    padding: '0.8rem 1rem 0.8rem 1rem',
    borderRadius: '3px',
    fontFamily: 'inherit',
    fontWeight: '700',
    fontSize: '1em',
    color: theme.palette.main.lightText,
    backgroundColor: theme.palette.main.secondary,
    '&:hover': {
      backgroundColor: theme.palette.main.medText
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: '1rem'
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
  noShow: {
    display: 'none'
  },
  bandHeader: {
    color: theme.palette.main.lightText,
    marginTop: '1rem'
  },
  bandInfo: {
    color: theme.palette.main.lightText,
    textAlign: 'justify',
    margin: '0',
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
  bandInfoLeft: {
    width: '50%',
    marginLeft: '2rem',
    marginRight: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.8rem',
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      marginTop: '1rem'
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  bandInfoRight: {
    width: '50%',
    marginLeft: '2rem',
    marginRight: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      fontSize: '0.8rem',
      fontWeight: '700'
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  buttonLinks: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    [theme.breakpoints.up('xs')]: {

    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '2rem'
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  buttonLink: {
    border: 'none',
    padding: '0.5rem 0.5rem 0.5rem 0.5rem',
    borderRadius: '3px',
    fontFamily: 'inherit',
    fontWeight: '500',
    fontSize: '0.9em',
    color: theme.palette.main.lightText,
    backgroundColor: theme.palette.main.secondary,
    '&:hover': {
      backgroundColor: theme.palette.main.medText
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  iframe: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '1rem',
      width: '80%'
    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      marginBottom: '2rem',

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    },

  },
  havenfieldContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    borderTop: `1px solid ${theme.palette.main.lightText}`,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  theGoodFewContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    borderTop: `1px solid ${theme.palette.main.lightText}`,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  poorChoiceContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    borderTop: `1px solid ${theme.palette.main.lightText}`,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  bigNitroContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    borderTop: `1px solid ${theme.palette.main.lightText}`,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },
  thirteenNecklaceContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    borderTop: `1px solid ${theme.palette.main.lightText}`,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    }
  },

}

));



const MusicPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [currentBand, setCurrentBand] = useState('havenfield')

  const handleClick = (e) => {
    setCurrentBand(e.target.value)
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography className={classes.infoHeader} variant='h3'>Music</Typography>
        <p className={classes.infoParagraph}>
          lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
        </p>
        <div className={classes.buttonContainer}>
          <button className={currentBand === 'havenfield' ? classes.activeButton : classes.button} value='havenfield' onClick={handleClick}>
            Havenfield
          </button>
          <button className={currentBand === 'the good few' ? classes.activeButton : classes.button} value='the good few' onClick={handleClick}>
            The Good Few
          </button>
          <button className={currentBand === 'poor choice' ? classes.activeButton : classes.button} value='poor choice' onClick={handleClick}>
            Poor Choice
          </button>
          <button className={currentBand === 'big nitro' ? classes.activeButton : classes.button} value='big nitro' onClick={handleClick}>
            Big Nitro
          </button>
          <button className={currentBand === '13 necklace' ? classes.activeButton : classes.button} value='13 necklace' onClick={handleClick}>
            13 Necklace
          </button>
        </div>
        <div className={currentBand === 'havenfield' ? classes.havenfieldContainer : classes.noShow}>
          <div className={classes.bandInfoLeft}>
            <h2 className={classes.bandHeader}>Alt Rock/Emo for The Angsty</h2>
            <p className={classes.bandInfo}>lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as th </p>
          </div>
          <div className={classes.bandInfoRight}>
            <iframe className={classes.iframe} src="https://open.spotify.com/embed/track/3365noetXZaJT41r5YfOA2" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div className={classes.buttonLinks}>
              <Link exact to={{ pathname: 'https://www.youtube.com/watch?v=iLGI9LZAkko' }} target='_blank'>
                <button className={classes.buttonLink}>Youtube</button>
              </Link>
              <Link exact to={{ pathname: 'https://havenfield.bandcamp.com/' }} target='_blank'>
                <button className={classes.buttonLink}>Bandcamp</button>
              </Link>
              <Link exact to={{ pathname: 'https://music.apple.com/us/album/color-ep/1124755529' }} target='_blank'>
                <button className={classes.buttonLink}>Apple Music</button>
              </Link>
              <Link exact to={{ pathname: 'https://open.spotify.com/artist/1Z4IMxUJXdPRy4s5u6iQQO?si=uHpTLFA7TgyPjObrvmHnjA' }} target='_blank'>
                <button className={classes.buttonLink}>Spotify</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={currentBand === 'the good few' ? classes.theGoodFewContainer : classes.noShow}>
          <div className={classes.bandInfoLeft}>
            <h2 className={classes.bandHeader}>Fun Pop Rock with an Edge</h2>
            <p className={classes.bandInfo}>lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as th </p>
          </div>
          <div className={classes.bandInfoRight}>
            <iframe className={classes.iframe} src="https://open.spotify.com/embed/track/3P6Li3rR7th5UUigpOhlbc" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div className={classes.buttonLinks}>
              <Link exact to={{ pathname: 'https://www.youtube.com/watch?v=9wR5E9-E0rE' }} target='_blank'>
                <button className={classes.buttonLink}>Youtube</button>
              </Link>
              <Link exact to={{ pathname: 'https://thegoodfew.bandcamp.com/' }} target='_blank'>
                <button className={classes.buttonLink}>Bandcamp</button>
              </Link>
              <Link exact to={{ pathname: 'https://music.apple.com/us/album/peace-by-pieces/1438050412' }} target='_blank'>
                <button className={classes.buttonLink}>Apple Music</button>
              </Link>
              <Link exact to={{ pathname: 'https://open.spotify.com/artist/39iHsKEwTEYUW9p9V4rhSc?si=xxwqL-GLQCWrmSt0UNy-KQ' }} target='_blank'>
                <button className={classes.buttonLink}>Spotify</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={currentBand === 'poor choice' ? classes.poorChoiceContainer : classes.noShow}>
          <div className={classes.bandInfoLeft}>
            <h2 className={classes.bandHeader}>Long Island Hardcore</h2>
            <p className={classes.bandInfo}>lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as th </p>
          </div>
          <div className={classes.bandInfoRight}>
            <iframe className={classes.iframe} src="https://open.spotify.com/embed/track/2LRFyrLbBS02MjumU1Mrwn" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div className={classes.buttonLinks}>
              <Link exact to={{ pathname: 'https://www.youtube.com/watch?v=5s5Lj_-3FJY' }} target='_blank'>
                <button className={classes.buttonLink}>Youtube</button>
              </Link>
              <Link exact to={{ pathname: 'https://poorchoice631.bandcamp.com/' }} target='_blank'>
                <button className={classes.buttonLink}>Bandcamp</button>
              </Link>
              <Link exact to={{ pathname: 'https://music.apple.com/us/album/elevate-single/1508644713' }} target='_blank'>
                <button className={classes.buttonLink}>Apple Music</button>
              </Link>
              <Link exact to={{ pathname: 'https://open.spotify.com/artist/4XLV1UaXt7eH91SB8paKjd?si=3VFLqMAES6S3po948HXZwg' }} target='_blank'>
                <button className={classes.buttonLink}>Spotify</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={currentBand === 'big nitro' ? classes.bigNitroContainer : classes.noShow}>
          <div className={classes.bandInfoLeft}>
            <h2 className={classes.bandHeader}>90's-Esque Power Pop Rock</h2>
            <p className={classes.bandInfo}>lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as th </p>
          </div>
          <div className={classes.bandInfoRight}>
            <h2 className={classes.bandHeader}>Music Coming Soon!</h2>
          </div>
        </div>
        <div className={currentBand === '13 necklace' ? classes.thirteenNecklaceContainer : classes.noShow}>
          <div className={classes.bandInfoLeft}>
            <h2 className={classes.bandHeader}>Washy Dream Rock from NYC</h2>
            <p className={classes.bandInfo}>lorem ipsum dolor sit amet, consectetur t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as th </p>
          </div>
          <div className={classes.bandInfoRight}>
            <iframe className={classes.iframe} src="https://open.spotify.com/embed/track/4izWXdyDG4UemCYmbB1oFc" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div className={classes.buttonLinks}>
              <Link exact to={{ pathname: 'https://www.youtube.com/watch?v=YHi14660B9I' }} target='_blank'>
                <button className={classes.buttonLink}>Youtube</button>
              </Link>
              <Link exact to={{ pathname: 'https://13necklace.bandcamp.com/album/on-and-off' }} target='_blank'>
                <button className={classes.buttonLink}>Bandcamp</button>
              </Link>
              <Link exact to={{ pathname: 'https://music.apple.com/gb/album/darth-maul-ep/1523928528' }} target='_blank'>
                <button className={classes.buttonLink}>Apple Music</button>
              </Link>
              <Link exact to={{ pathname: 'https://open.spotify.com/artist/03y5HyvZEQNwdVroUkEUHM?si=b43VwKc8TtO0psIczyMAdg' }} target='_blank'>
                <button className={classes.buttonLink}>Spotify</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default MusicPage;
