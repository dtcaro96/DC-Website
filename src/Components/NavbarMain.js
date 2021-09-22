import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '4rem',
  },
  appbar: {
    zIndex: 1,
    color: theme.palette.main.darkText,
    height: '4rem',
    backgroundColor: theme.palette.main.secondary,
    justifyContent: 'center',
    boxShadow: '0px 5px 30px black',
    [theme.breakpoints.down('xs')]: {
      height: '4rem',
    },
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
  },
  miniToolbar: {
    height: '4rem',
    backgroundColor: '#212121',
    color: '#fff',
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
  }
}));

export default function NavbarMain () {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleAccordianOpen = () => {
    setOpen(true);
  };
  const handleAccordianClose = () => {
    setOpen(false);
  };

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
          <Link to="/" className={classes.link}>
            <Button className={classes.button} color="inherit">
              Home
            </Button>
          </Link>
          <Link to="/music" className={classes.link}>
            <Button className={classes.button} color="inherit">
              Music
            </Button>
          </Link >
          <Button className={classes.button} color="inherit">
            About
          </Button>
          <Button className={classes.button} color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="top"
        open={open}
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
          <ListItem>
            <ListItemText>
              <Link to="/" className={classes.link}>
                <Button >
                  Home
                </Button>
              </Link >
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/music" className={classes.link}>
                <Button >
                  Music
                </Button>
              </Link >
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
      </Drawer>
    </div>
  );
}
