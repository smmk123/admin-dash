import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { fetchUserStats } from '../data/Users';
import { AccountCircle, LockOpen, Timelapse, Error } from '@mui/icons-material';
import UsersLoginChart from './UsersLoginChart';
import { styled } from '@mui/system';

const GradientCard = styled(Card)(({ theme, color }) => ({
  background: color,
  color: '#ffffff',
}));

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
          <Grid item xs={12} md={6} lg={6}>
            <GradientCard color="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)">
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
            </GradientCard>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <GradientCard color="linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)">
              <CardContent>
                <LockOpen />
                <Typography
                  variant="h6"
                  component="h3"
                  align="center"
                  gutterBottom
                >
                  Users Logging In
                </Typography>
                <Typography variant="body1" align="center">
                  Today: {userStats.usersLoggingInToday}
                </Typography>
                <UsersLoginChart />
              </CardContent>
            </GradientCard>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <GradientCard color="linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)">
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
            </GradientCard>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <GradientCard color="linear-gradient(45deg, #F44336 30%, #FF5252 90%)">
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
            </GradientCard>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default UsersStats;
