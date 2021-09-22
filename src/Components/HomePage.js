import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
  photoContainer: {
    width: '100%',
    backgroundColor: 'inherit',
  },
  photo: {
    width: '100%',
    maxWidth: 1204,
    maxHeight: 804,
    margin: 'auto',
    display: 'block',
  },
}));

export default function HomePage () {
  const classes = useStyles();
  return (
    <div className={classes.photoContainer}>
      <img
        src="https://f4.bcbits.com/img/0007960984_10.jpg"
        className={classes.photo}
      />
    </div>
  );
}
