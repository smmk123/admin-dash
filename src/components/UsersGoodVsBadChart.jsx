import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { fetchGoodVsBadLogins } from '../data/Users';

const UsersGoodVsBadChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGoodVsBadLogins().then((data) => {
      setData(data);
    });
  }, []);

  const COLORS = ['#DEFFB4', '#ff0000'];

  return (
    <>
      {data && (
        <div className="bg-transparent rounded shadow p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Good Vs Bad Logins</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default UsersGoodVsBadChart;

