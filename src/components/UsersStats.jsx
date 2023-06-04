import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { fetchUserStats } from '../data/Users';
import { AccountCircle, LockOpen, Timelapse, Error } from '@mui/icons-material';

const UsersStats = () => {
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    fetchUserStats().then((data) => {
      setUserStats(data);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          User Statistics
        </Typography>
      </Grid>
      {userStats && (
        <>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#FFC107' }}>
              <CardContent>
                <AccountCircle />
                <Typography
                  variant="h6"
                  component="h3"
                  align="center"
                  gutterBottom
                >
                  Last User to Log In
                </Typography>
                <Typography variant="body1" align="center">
                  {userStats.lastUserLogin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#2196F3' }}>
              <CardContent>
                <LockOpen />
                <Typography
                  variant="h6"
                  component="h3"
                  align="center"
                  gutterBottom
                >
                  Users Logging In Today
                </Typography>
                <Typography variant="body1" align="center">
                  {userStats.usersLoggingInToday}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#4CAF50' }}>
              <CardContent>
                <Timelapse />
                <Typography
                  variant="h6"
                  component="h3"
                  align="center"
                  gutterBottom
                >
                  Average User Frequency
                </Typography>
                <Typography variant="body1" align="center">
                  {userStats.averageUserFrequency}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#F44336' }}>
              <CardContent>
                <Error />
                <Typography
                  variant="h6"
                  component="h3"
                  align="center"
                  gutterBottom
                >
                  Bad Logins
                </Typography>
                <Typography variant="body1" align="center">
                  {userStats.badLogins}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default UsersStats;
