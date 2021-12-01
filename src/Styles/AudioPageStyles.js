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
    subjectContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderTop: `1px solid ${theme.palette.main.lightText}`,
        marginTop: '0.8rem',
        paddingTop: '1rem',

    },
    subjectHeader: {
        fontFamily: 'inherit',
        color: theme.palette.main.lightText,
        fontSize: '2rem',
        fontWeight: '700',
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.5rem',
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
    subjectParagraph: {
        color: theme.palette.main.lightText,
        textAlign: 'justify',
        marginTop: '0.2rem',
        marginBottom: '0',
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.8rem',
            marginTop: '0.4rem'
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
    downloadLink: {
        textDecoration: 'none',
        color: theme.palette.main.lightText,
        backgroundColor: theme.palette.main.secondary,
        marginTop: '1rem',
        marginBottom: '0.5rem',
        padding: '1rem',
        fontWeight: '700',
        borderRadius: '3px',
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.8rem'
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
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
