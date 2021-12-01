import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 114px)',
        fontFamily: 'Roboto Mono, monospace',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        marginBottom: '2rem'
    },
    inputBox: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        width: '100%',
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
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25rem',
        height: '3rem',
        borderRadius: '3px',
        border: '0',
        marginTop: '10px',
        marginBottom: '10px',
        color: theme.palette.main.darkText,
        fontSize: '1.5rem',
        [theme.breakpoints.up('xs')]: {
            width: '13rem',
            height: '2rem',
            marginRight: '1rem',
            fontSize: '.8rem',
            marginBottom: '5px',
            marginTop: '5px',
            fontFamily: 'inherit'
        },
        [theme.breakpoints.up('sm')]: {
            height: '3rem',
            width: '22rem',
            marginRight: '2rem',
            marginBottom: '15px',
            fontSize: '1.2rem'
        },
        [theme.breakpoints.up('md')]: {
            marginRight: '4rem',
            width: '26rem'
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: '6rem',
            width: '30rem'
        },
        [theme.breakpoints.up('xl')]: {
        }
    },
    messageInput: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '2rem',
        width: '25rem',
        height: '10rem',
        borderRadius: '3px',
        border: '0',
        marginTop: '10px',
        marginBottom: '20px',
        color: theme.palette.main.darkText,
        fontSize: '1.5rem',
        fontFamily: 'inherit',
        [theme.breakpoints.up('xs')]: {
            fontSize: '.8rem',
            height: '6rem',
            width: '13rem',
            marginRight: '1rem',
            marginBottom: '14px',
            marginTop: '5px'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.2rem',
            height: '9rem',
            width: '22rem',
            marginRight: '2rem',
            marginBottom: '20px',
            marginTop: '5px'
        },
        [theme.breakpoints.up('md')]: {
            marginRight: '4rem',
            width: '26rem',
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: '6rem',
            width: '30rem'
        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('xs')]: {
            margin: '0',
            height: '100%',
            width: '100%',
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
    card: {
        height: '50rem',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.main.secondary,
        border: `1px solid ${theme.palette.main.lightText}`,
        marginLeft: 'auto',
        boxShadow: 'none',
        marginRight: 'auto',
        marginTop: '5rem',
        marginBot: '10rem',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: '30rem',
            marginTop: '2rem',
            padding: '0'
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            height: '45rem'
        },
        [theme.breakpoints.up('md')]: {
            width: '70%'

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    label: {
        color: theme.palette.main.lightText,
        fontWeight: '700',
        fontSize: '2rem',
        [theme.breakpoints.up('xs')]: {
            fontSize: '1rem',
            fontWeight: '400',
            marginLeft: '1rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.7rem',
            marginLeft: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '4rem'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '6rem'
        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    typography: {
        color: theme.palette.main.lightText,
        fontWeight: '700',
        fontSize: '3rem',
        fontFamily: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4rem',
        [theme.breakpoints.up('xs')]: {
            marginTop: '0',
            marginBottom: '1.2rem',
            marginRight: '1rem',
            marginLeft: '1rem',
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5rem',
            marginBottom: '3rem'
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    captcha: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    spacer: {
        height: '21rem'
    },
    button: {
        backgroundColor: theme.palette.main.secondary,
        color: theme.palette.main.lightText,
        border: `3px solid ${theme.palette.main.lightText}`,
        borderRadius: '3px',
        boxShadow: `2px 2px 2px ${theme.palette.main.darkText}`,
        height: '2rem',
        width: '7rem',
        marginTop: '18px',
        fontFamily: 'inherit',
        fontSize: '1rem',
        fontWeight: '700',
        transition: 'all 100ms',
        '&:hover': {
            boxShadow: 'none',
            transform: 'translate(0.1em, 0.1em)',
            backgroundColor: theme.palette.main.primary,
            cursor: 'pointer'
        },
        '&:active': {
            backgroundColor: theme.palette.main.primary,
        },
        [theme.breakpoints.up('sm')]: {
            height: '3rem',
            width: '10rem',
            fontSize: '1.5rem'

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    },
    h1: {
        margin: 0,
        color: theme.palette.main.lightText,
        fontWeight: 700,
        marginBottom: '2rem',
        marginTop: '2rem'
    },
    thankYouTypography: {
        color: theme.palette.main.lightText,
        fontWeight: '700',
        backgroundColor: theme.palette.main.primary,
        border: `1px solid ${theme.palette.main.lightText}`,
        padding: '.5rem',
        borderRadius: '5px',
        fontSize: '3rem',
        fontFamily: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4rem',
        [theme.breakpoints.up('xs')]: {
            marginTop: '0',
            marginBottom: '1.2rem',
            marginRight: '1rem',
            marginLeft: '1rem',
            fontSize: '1.3rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.3rem',
            marginBottom: '3rem'
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.up('xl')]: {

        }
    }
}));
