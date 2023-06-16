import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { fetchUserTimeSpent } from '../../data/Users';
import { Typography } from '@mui/material';

const UsersTimeSpentChart = () => {
  const [userTime, setUserTime] = useState([]);

  useEffect(() => {
    fetchUserTimeSpent().then((data) => {
      setUserTime(data);
    });
  }, []);

  return (
    <div className="bg-transparent rounded shadow-md p-4 mb-4">
      <Typography variant="h6" className="mb-2 text-xl">
        Average Time Spent
      </Typography>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={userTime}>
            <Bar dataKey="count" fill="#ffffff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsersTimeSpentChart;
