import UsersTable from './UsersTable';
import React, { useEffect, useState } from 'react';
import { fetchUserStats } from '../data/Users';
import UsersLoginChart from './UsersLoginChart';
import UsersGoodVsBadChart from './UsersGoodVsBadChart';
import UsersTimeSpentChart from './UserTimeSpent';
import LatestUserDataTable from './UsersLatesetLogin';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { AccountCircle, LockOpen, Timelapse, Error } from '@mui/icons-material';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const UsersPage = () => {
  const [userStats, setUserStats] = useState(null);
  const ResponsiveGridLayout = WidthProvider(Responsive);

  useEffect(() => {
    fetchUserStats().then((data) => {
      setUserStats(data);
    });
  }, []);
  return (
    <div className="container mx-auto my-4">
      <span className="text-4xl text-center font-bold mb-4">Users (Click and Drag to customize)</span>
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={200}
      >
        <div
          key="latestUser"
          data-grid={{ x: 0, y: 0, w: 3, h: 2 }}
          className="bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-lg p-4"
        >
          <AccountCircle />
          <h3 className="text-lg text-center font-medium mb-2">
            Users Logging In
          </h3>
          <LatestUserDataTable />
        </div>
        <div
          key="usersLoggingIn"
          data-grid={{ x: 3, y: 0, w: 3, h: 2 }}
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
