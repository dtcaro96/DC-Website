import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        margin: 'none',
        padding: 'none',
        backgroundColor: theme.palette.main.primary
    },
    page: {
        width: '100%',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
    },
    NavbarMain: {
        shadows: 'none'
    },
    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '50px'
    },

}));
