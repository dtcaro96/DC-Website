import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '4rem',
    },
    appbar: {
        zIndex: 1,
        color: theme.palette.main.lightText,
        height: '64px',
        backgroundColor: theme.palette.main.secondary,
        justifyContent: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
        },
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: 1.5,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: theme.palette.main.lightText
    },
    miniToolbar: {
        height: '4rem',
        backgroundColor: theme.palette.main.secondary,
        color: theme.palette.main.lightText,
    },
    drawer: {
        backgroundColor: theme.palette.main.primary,

    },
    button: {
        color: theme.palette.main.lightText,
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    buttonBox: {
        display: 'flex',
        alignItems: 'space-evenly',
        justifyContent: 'space-evenly',

    },
    link: {
        textDecoration: 'none',
        '& button': {
            color: theme.palette.main.lightText
        }
    },
    drawerButton: {
        justifyContent: 'start'
    }
}));