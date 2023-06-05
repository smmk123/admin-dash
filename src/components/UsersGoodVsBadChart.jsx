import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { fetchGoodVsBadLogins } from '../data/Users';
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
}));

const UsersGoodVsBadChart = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGoodVsBadLogins().then((data) => {
      setData(data);
    });
  }, []);

  const COLORS = ['#99ff66', '#ff0000'];

  return (
    <>
      {data && (
        <Box className={classes.chartContainer}>
          <Typography variant="h6" className={classes.chartTitle}>
            Good Vs Bad Logins
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={180}
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius =
                    innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#ffffff"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {`${data[index].name} (${data[index].value})`}
                    </text>
                  );
                }}
              >
                <Cell key="cell-0" fill={COLORS[0]} />
                <Cell key="cell-1" fill={COLORS[1]} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      )}
    </>
  );
};

export default UsersGoodVsBadChart;
