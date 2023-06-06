import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { fetchUserTimeSpent } from '../data/Users';
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

const UsersTimeSpentChart = () => {
  const classes = useStyles();
  const [userTime, setUserTime] = useState([]);

  useEffect(() => {
    fetchUserTimeSpent().then((data) => {
      setUserTime(data);
    });
  }, []);

  return (
    <Box className={classes.chartContainer}>
      <Typography variant="h6" className={classes.chartTitle}>
        Average Time Spent
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={userTime}>
          <Bar dataKey="count" fill="#ffffff" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default UsersTimeSpentChart;
