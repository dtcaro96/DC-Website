import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    }

}

));
