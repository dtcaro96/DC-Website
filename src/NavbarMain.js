import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        zIndex: 1,
        height: '4rem',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '4rem'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        }
    },
    title: {
        flexGrow: 1,
    },
    miniToolbar: {
        height: '4rem',
        backgroundColor: '#3f51b5',
        color: '#fff'
    },
    button: {
        backgroundColor: 'inherit',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    drawer: {
        backgroundColor: 'inherit',
    }


}));

export default function NavbarMain () {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleAccordianOpen = () => {
        setOpen(true)
    }
    const handleAccordianClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleAccordianOpen}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Daniel Caro
                    </Typography>
                    <Button className={classes.button} color="inherit">Home</Button>
                    <Button className={classes.button} color="inherit">Music</Button>
                    <Button className={classes.button} color="inherit">About</Button>
                    <Button className={classes.button} color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="top"
                open={open}
                classes={classes.drawer}
            >
                <Toolbar className={classes.miniToolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleAccordianClose}
                    >
                        <ExpandLessIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Daniel Caro
                    </Typography>
                </Toolbar>
                <Divider />
                <List className={classes.drawer}>
                    <ListItem >
                        <ListItemText>
                            <Button>Home</Button>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Button>Music</Button>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Button>About</Button>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Button>Contact</Button>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer >
        </div >
    )
}
