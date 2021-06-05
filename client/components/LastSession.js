import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

const useStyles = makeStyles({
  contain: {
    padding: 10,
    minWidth: 100,
    minHeight: 272,
    // maxWidth: 300,
    flexGrow: 1,
  },
  lsItem: {
    padding: 8,
  },
});

const LastSession = () => {
  const classes = useStyles();
  //useSelector allows this component to access state
  const sessions = useSelector((state) => state.sessions);

  let lastSession;
  if (sessions.length) {
    lastSession = sessions[sessions.length - 1];
  }

  let startTime;
  let expectedEndTime;
  let actualEndTime;

  if (lastSession) {
    startTime = dayjs(lastSession.startTime).format('LT');
    expectedEndTime = dayjs(lastSession.expectedEndTime).format('LT');
    actualEndTime = dayjs(lastSession.actualEndTime).format('LT');
  }

  return (
    <Paper className={classes.contain}>
      <Typography className={classes.lsItem} variant="h5" color="primary">
        Last Session
      </Typography>
      <Grid container>
        <Grid item className={classes.lsItem} xs={6}>
          <Typography variant="caption" color="textSecondary">
            Length
          </Typography>
          <Typography variant="h5">
            {lastSession ? `${lastSession.sessionTime}min` : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.lsItem} xs={6}>
          <Typography variant="caption" color="textSecondary">
            Start Time
          </Typography>
          <Typography variant="h5">{lastSession ? startTime : ''}</Typography>
        </Grid>
        <Grid item className={classes.lsItem} xs={6}>
          <Typography variant="caption" color="textSecondary">
            Expected End Time
          </Typography>
          <Typography variant="h5">
            {' '}
            {lastSession ? expectedEndTime : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.lsItem} xs={6}>
          <Typography variant="caption" color="textSecondary">
            Actual End Time
          </Typography>
          <Typography variant="h5">
            {lastSession ? actualEndTime : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.lsItem} xs={6}>
          <Typography variant="caption" color="textSecondary">
            Successful
          </Typography>
          <Typography variant="h5">
            {lastSession ? (lastSession.successful ? 'Yes' : 'No') : ''}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LastSession;
