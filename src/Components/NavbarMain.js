import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { useStyles } from '../Styles/NavbarMainStyles'

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
      <AppBar elevation={0} position="fixed" className={classes.appbar}>
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
          <Link to="/" className={classes.title}>
            Danny Caro
          </Link>
          <div className={classes.buttonBox}>
            <Link to="/" className={classes.link}>
              <Button className={classes.button}>
                Home
              </Button>
            </Link>
            <Link to="/music" className={classes.link}>
              <Button className={classes.button}>
                Music
              </Button>
            </Link >
            <Link to="/audio" className={classes.link}>
              <Button className={classes.button}>
                Audio
              </Button>
            </Link >
            <Link to="/dev" className={classes.link}>
              <Button className={classes.button}>
                Dev
              </Button>
            </Link >
            <Link to="/contact" className={classes.link}>
              <Button className={classes.button}>
                Contact
              </Button>
            </Link >
          </div>
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
            Danny Caro
          </Typography>
        </Toolbar>
        <List className={classes.drawer}>
          <ListItem>
            <ListItemText>
              <Link to="/" className={classes.link}>
                <Button className={classes.drawerButton} onClick={handleAccordianClose}>
                  Home
                </Button>
              </Link >
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/music" className={classes.link}>
                <Button className={classes.drawerButton} onClick={handleAccordianClose}>
                  Music
                </Button>
              </Link >
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to='/audio' className={classes.link}>
                <Button className={classes.drawerButton} onClick={handleAccordianClose}>Audio</Button>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to='/dev' className={classes.link}>
                <Button className={classes.drawerButton} onClick={handleAccordianClose}>Dev</Button>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to='/contact' className={classes.link}>
                <Button className={classes.drawerButton} onClick={handleAccordianClose}>Contact</Button>
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
