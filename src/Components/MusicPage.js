import React, { useEffect, useRef, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from '../Styles/MusicPageStyles'

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
          All my life I've been playing music, performing in groups, recording, learning new instruments. I've played in groups ranging from jazz combos to acapella groups to rock & metal bands and continue to explore new avenues of music.
          <br />
          <br />
          Starting in the fourth grade, I started on the trombone in band class and eventually learned the bass the year after. After playing bass in band, I picked up the guitar, as it was pretty easy to translate. This started the downward spiral into my obsession with rock and metal music.After discovering Metallica in 7th grade, I constantly was exploring challenging myself when it came to my playing and eventually songwriting. In tenth grade, I saved up enough money in order to buy my first drum kit and taught myself drums, listening and playing along to my favorite tracks.
          <br />
          <br />
          As I was approaching the end of my days in high school, I had decided that I wanted to pursue music professionally and/or ultimately keep being involved in it the rest of my life. I started to visit and apply to colleges and ended up at SUNY Purchase College. It was here that I began to thrive musically, being surrounded by talent of all sorts and people really enthusiastic about the arts. I joined a bunch of bands, recorded some albums with them, and played a ton of shows around the area.
          <br />
          <br />
          Currently I continue to play in bands and record music. I even have my first studio E.P. completely written and performed by myself finished and am looking forward to releasing it. Check out some of the projects I've been a part of below!
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
            <p className={classes.bandInfo}>
              I joined Havenfield in early 2015 on the drums, the first group I got to play the drums in. After our singer released the first E.P. that spring, we started to write music as a band and prep for recording. After playing a multitude of shows around the north-east, we recorded our debut fully collaborative E.P, Color in summer 2016. We continued to play shows up until early 2018 where we played our final show. I really miss this band.
            </p>

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
            <p className={classes.bandInfo}>This band has been a band for quite some time, but after a long pandemic, they were looking to play some shows again with a new line-up. After being asked to play guitar for their first show back, we played at Berlin Under A in the East Village to a packed house. Looking forward to playing with this group more!</p>
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
            <p className={classes.bandInfo}>What started as a punk/emo project from Long Island legend Gerry Windus, I met Gerry at school and joined what was originally called Bedmakers. After solidifying our line-up and recording some new heavier music, we released our debut E.P, Subject 2 Hate in summer 2018. We played some great hardcore bands including Madball, Show Me The Body, SeeYouSpaceCowboy and a bunch of others. The project fizzled out after the pandemic took place.</p>
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
            <p className={classes.bandInfo}>This is my first project where the music is solely written, performed, and recorded by myself. I had the most fun creating this E.P. and I'm so excited to show it to the world. Hoping to get a band together and play some shows once the release is done! I hope you like rock music.</p>
          </div>
          <div className={classes.bandInfoRight}>
            <h2 className={classes.bandHeader}>Music Coming Soon!</h2>
          </div>
        </div>
        <div className={currentBand === '13 necklace' ? classes.thirteenNecklaceContainer : classes.noShow}>
          <div className={classes.bandInfoLeft}>
            <h2 className={classes.bandHeader}>Washy Dream Rock from NYC</h2>
            <p className={classes.bandInfo}>NYC-based indie rock band 13 Necklace that our first proper full-length, On and Off, taking cues from our first two releases while introducing a heavier, poppier sound. The band initially started as a purely solo outlet in 2019, eventually evolving into a fully fledged band. Today, the 13 Necklace live lineup consists of Danny Evans on guitar and vocals, Milo Sussman on bass, and Danny Caro on drums. With the return of concerts following periods of quarantine due to the COVID-19 pandemic, the band has been able to move forward with a new beginning of sorts, exploring how the project will look in a live capacity.</p>
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
