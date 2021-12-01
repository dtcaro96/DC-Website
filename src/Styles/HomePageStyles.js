import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
        fontFamily: 'Roboto Mono, monospace',
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
        fontFamily: 'Roboto Mono, monospace',
        marginBottom: '2rem',
        borderRadius: '3px',
        boxShadow: 'none'
    },
    cardButton: {
        color: theme.palette.main.lightText,
        backgroundColor: theme.palette.main.secondary,
        fontFamily: 'Roboto Mono, monospace',
        '&:hover': {
            backgroundColor: theme.palette.main.medText
        }
    },
    buttonLink: {
        textDecoration: 'none',
    },
    cardFont: {
        fontFamily: 'Roboto Mono, monospace'
    },
    parallax: {
        width: '100%',
        maxWidth: '1438px',
        margin: 'auto',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'block',
        marginTop: '2rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '0',
        },
        [theme.breakpoints.up('xs')]: {
            minHeight: '450px'
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: '500px'
        },
        [theme.breakpoints.up('md')]: {
            minHeight: '700px'
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: '1000px'
        },
    },
    parallaxTitle: {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '',
        fontWeight: 400,
        lineHeight: 1.5,
        color: theme.palette.main.lightText,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.main.primary,
        padding: '0.5rem 2rem 0.5rem 2rem',
        borderRadius: '5px',
        margin: '0 3rem 0 3rem',
        [theme.breakpoints.up('sm')]: {
            margin: '4rem 5rem 0rem 5rem',
        },
        [theme.breakpoints.up('md')]: {
            margin: '4rem 10rem 0rem 10rem',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '40rem 20rem 0rem 20rem',
        },
    }
}));