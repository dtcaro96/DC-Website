import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footerText: {
        color: theme.palette.main.lightMedText,
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'end',
        marginRight: '3rem',
        paddingBottom: '1rem',
        paddingTop: '1rem',
    },
    footer: {
        backgroundColor: theme.palette.main.primary,
        muted: 'true',
    },
    icon: {
        marginRight: '0.45rem',
        textDecoration: 'none',
        color: theme.palette.main.lightText
    }
}));