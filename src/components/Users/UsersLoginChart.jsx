import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { fetchUserLogins } from '../../data/Users';

const UsersLoginChart = () => {
  const [userLogins, setUserLogins] = useState([]);

  useEffect(() => {
    fetchUserLogins().then((data) => {
      setUserLogins(data);
    });
  }, []);

  return (
    <div className="bg-transparent rounded shadow-md p-4 mb-6">
      <h6 className="text-xl mb-4">Login History</h6>
      <ResponsiveContainer width="100%" height={200}>
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
    </div>
  );
};

export default UsersLoginChart;
