import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { fetchUserLogins } from '../data/Users';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const UsersLoginChart = () => {
  const useStyles = styled((theme) => ({
    chartContainer: {
      backgroundColor: 'transparent',
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[3],
      padding: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    chartTitle: {
      marginBottom: theme.spacing(2),
      fontSize: '1.5rem',
    },
  }));
  const classes = useStyles();
  const [userLogins, setUserLogins] = useState([]);

  useEffect(() => {
    fetchUserLogins().then((data) => {
      setUserLogins(data);
    });
  }, []);

  return (
    <Box className={classes.chartContainer}>
      <Typography variant="h6" className={classes.chartTitle}>
        Login History
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={userLogins}>
          <Area
            type="monotone"
            dataKey="count"
            stroke="#ffffff"
            strokeWidth={7}
            fill="transparent"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default UsersLoginChart;
