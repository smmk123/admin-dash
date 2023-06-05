import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { fetchUserLogins } from '../data/Users';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

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
  tooltip: {
    color: '#000000',
  },
}));

const UsersLoginChart = () => {
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
          <XAxis
            dataKey="date"
            axisLine={{ stroke: '#ffffff' }}
            tick={{ fill: '#ffffff' }}
          />
          <YAxis axisLine={{ stroke: '#ffffff' }} tick={{ fill: '#ffffff' }} />
          <Tooltip contentStyle={{ color: '#000000' }} />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorGradient)"
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#38297f" stopOpacity={0.8} />
  <stop offset="95%" stopColor="#38297f" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default UsersLoginChart;
