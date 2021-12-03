import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../Styles/AudioPageStyles'
import { Link } from 'react-router-dom';

export default function AboutPage () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography className={classes.infoHeader} variant='h3'>Audio</Typography>
                <div className={classes.subjectContainer}>
                    <Typography className={classes.subjectHeader} variant='h2'>Production</Typography>
                    <p className={classes.subjectParagraph}>
                        I have over 8 years of experience in music production and even have a Music Bachelor's degree in Music: Studio Production from SUNY Purchase College in Purchase, NY. Ever since I sparked my passion for recording music in the tenth grade, I have been constantly working with artists in terms of tracking, producing, editing, mixing, mastering within DAW's (digital audio workstations).
                        <br />
                        <br />
                        Mainly recording in Avid's Pro Tools, I am also comfortable in Reaper and Logic Pro. I've recorded everything from jazz combos & barbershop quartets to metal and indie rock bands. Some software applications and plugins I have and worked with include Waves Suite, Fabfilter, Sound Toys, Valhalla DSP, IK Multimedia Amplitube, Superior Drummer, Kontakt Player, Isotope, & Melodyne.
                        <br />
                        <br />
                        My current hardware includes: 13inch HP Spectre x360 w/ 16GB RAM and Intel Core i7 10th Gen, 2 x Adam Audio T7V 2-Way Monitors, SSL2 2-Channel Audio Interface, Phillips SHP9500 Open-Back Headphones, SM-58 Switch Dynamic Mic, MXL 990 Large Diaphragm Condenser Mic, MXL 991 Small Diaphragm Condenser Mic, Ovation Acoustic Guitar, Memphis Japanese P-Bass Copy w/ Lollar Overwound Pickups, Ventura Stratocaster Copy w/ DiMarzio Super Distortions, Greco Les Pau Standardl Copy with DiMarzio Super Distortions, Univox Les Paul Junior Copy with P90. Click down below to view a Spotify playlist of artists I've worked with and produced!
                    </p>
                    <div className={classes.buttonBox}>
                        <Link className={classes.downloadLink} exact to={{ pathname: 'https://open.spotify.com/playlist/1LHSyhNVqf9DUHaRU6yrTL?si=892044864f2c47b7' }} target="_blank">See Past Work</Link>
                    </div>

                </div>
                <div className={classes.subjectContainer}>
                    <Typography className={classes.subjectHeader} variant='h2'>Live Sound</Typography>
                    <p className={classes.subjectParagraph}>
                        I have over 5 years experience in live audio in both music settings and corporate settings working mostly as an A2/System Tech but also have had the opportunity to A1 FOH and monitors for musical artists.
                        <br />
                        <br />
                        In school I ran our live sound team, Tech Services, that ran audio support for all of the many student-run events on campus. Here, I managed everything from shift scheduling to equipment maintenance and purchases and maintained our first-class system that continues to be in use today. We were lucky enough to have some nice gear including Midas M32 consoles and high-end Yamaha speakers and subs to keep up with the high-energy of our student-run events.
                        <br />
                        <br />
                        After school I worked at WorldStage Inc. where I broke into corporate audio, working with only the best and latest audio technology including D&B Audiotechnik, Meyer speakers, Yamaha CL/QU series consoles, Clearcom Freespeak & Helixnet comms, Riedel Artist/Bolero Wireless comms, Telex, RTS, Midas consoles, Shure Axient/ULX Wireless mic systems and Sennheiser wireless mic & IEM systems.
                        <br />
                        <br />
                        After a long pandemic and live sound returned, I started freelancing and continue with Worldstage Inc. working a multitude of shows/recordings all across New York. Some notable clients I've gotten to work with include Coach, HBO, Walmart Connect, ABM, NHL, Wall Street Journal, Intuit, GenBlue, Acxiom, etc.

                    </p>
                </div>
            </div>
        </div>
    )
}
