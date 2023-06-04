import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { fetchUserLogins } from '../data/Users';

const UsersLoginChart = () => {
  const [userLogins, setUserLogins] = useState([]);

  useEffect(() => {
    fetchUserLogins().then((data) => {
      setUserLogins(data);
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2>LogIn History</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={userLogins}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersLoginChart;
