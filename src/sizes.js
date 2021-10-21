const thing = {
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
}
const thing2 = (
    < div >
        < Zoom >
            <div className={classes.bandcampContainer}>
                <h2 className={classes.h2}>Bands and Recording Projects</h2>
                <div className={classes.iframeContainer}>
                    <iframe className={classes.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=1698779177/size=large/bgcol=da627d/linkcol=a53860/tracklist=false/transparent=true/" seamless><a href="https://havenfield.bandcamp.com/album/color">Color by Havenfield</a></iframe>
                    <iframe className={classes.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=3785878481/size=large/bgcol=da627d/linkcol=a53860/tracklist=false/transparent=true/" seamless><a href="https://13necklace.bandcamp.com/album/on-and-off">on and off by 13 necklace</a></iframe>
                    <iframe className={classes.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=865473457/size=large/bgcol=da627d/linkcol=a53860/tracklist=false/transparent=true/" seamless><a href="https://litho.bandcamp.com/album/demos">Demos by LITHO</a></iframe>
                    <iframe className={classes.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=4243537317/size=large/bgcol=da627d/linkcol=a53860/tracklist=false/transparent=true/" seamless><a href="https://poorchoice631.bandcamp.com/album/subject-2-hate">SUBJECT 2 HATE!by POOR CHOICE</a></iframe>
                </div>
            </div>
        </Zoom >
        <hr className={classes.hr} />
    </div >
)