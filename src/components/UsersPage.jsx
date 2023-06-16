import UsersTable from './Users/UsersTable';
import React, { useEffect, useState } from 'react';
import { fetchUserStats } from '../data/Users';
import UsersLoginChart from './Users/UsersLoginChart';
import UsersGoodVsBadChart from './Users/UsersGoodVsBadChart';
import UsersTimeSpentChart from './Users/UserTimeSpent';
import LatestUserDataTable from './Users/UsersLatesetLogin';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { LockOpen, Timelapse, Error } from '@mui/icons-material';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const UsersPage = () => {
  const layout = [
    { i: 'latestUser', x: 0, y: 0, w: 3, h: 2, minH: 2, minW: 3 },
    { i: 'usersLoggingIn', x: 3, y: 0, w: 3, h: 2 },
    { i: 'kuriboh', x: 2, y: 0, w: 1, h: 1 },
    { i: 'spell-caster', x: 3, y: 0, w: 1, h: 1 },
    { i: 'summoned-skull', x: 4, y: 0, w: 1, h: 1 },
  ];

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem('grid-layout');

    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
  };
  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem('grid-layout', JSON.stringify(layouts));
  };
  const [userStats, setUserStats] = useState(null);
  const ResponsiveGridLayout = WidthProvider(Responsive);

  useEffect(() => {
    fetchUserStats().then((data) => {
      setUserStats(data);
    });
  }, []);
  return (
    <div className="container mx-auto my-4">
      <span className="text-4xl text-center font-bold mb-4">
        Users (Click and Drag to customize)
      </span>
      <ResponsiveGridLayout
        layouts={getLayouts()}
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={200}
        onLayoutChange={handleLayoutChange}
      >
        <div
          key="latestUser"
          className="bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-lg p-4"
        >
          <LatestUserDataTable />
        </div>
        <div
          key="usersLoggingIn"
          className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-lg p-4"
        >
          {userStats && (
            <>
              <LockOpen />
              <h3 className="text-lg text-center font-medium mb-2">
                Users Logging In
              </h3>
              <p className="text-center">
                Today: {userStats.usersLoggingInToday}
              </p>
              <UsersLoginChart />
            </>
          )}
        </div>
        <div
          key="averageFrequency"
          data-grid={{ x: 6, y: 0, w: 3, h: 2 }}
          className="bg-gradient-to-br from-green-500 to-lime-400 text-white rounded-lg p-4"
        >
          {userStats && (
            <>
              <Timelapse />
              <h3 className="text-lg text-center font-medium mb-2">
                Average User Frequency
              </h3>
              <p className="text-center">{userStats.averageUserFrequency}</p>
              <UsersTimeSpentChart />
            </>
          )}
        </div>
        <div
          key="badLogins"
          data-grid={{ x: 9, y: 0, w: 3, h: 2 }}
          className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-4"
        >
          {userStats && (
            <div>
              <Error />
              <h3 className="text-lg text-center font-medium mb-2">
                Bad Logins
              </h3>
              <p className="text-center">{userStats.badLogins}</p>
              <UsersGoodVsBadChart />
            </div>
          )}
        </div>
        <div
          key="userlist"
          data-grid={{ x: 1, y: 10, w: 10, h: 7, minH: 7 }}
          className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-4"
        >
          <h1 className="text-4xl text-center font-bold mb-4">User List</h1>
          <UsersTable />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default UsersPage;
