const userData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
];
const userStats = {
  lastUserLogin: 'John Doe',
  usersLoggingInToday: 10,
  averageUserFrequency: 3.5,
  badLogins: 2,
};

const userLogins = [
  { date: '2023-06-01', count: 3 },
  { date: '2023-06-02', count: 5 },
  { date: '2023-06-03', count: 4 },
  { date: '2023-06-04', count: 6 },
  { date: '2023-06-05', count: 7 },
  { date: '2023-06-06', count: 2 },
  { date: '2023-06-07', count: 5 },
  { date: '2023-07-20', count: 3 },
  { date: '2023-07-21', count: 7 },
  { date: '2023-07-22', count: 4 },
  { date: '2023-07-23', count: 6 },
  { date: '2023-07-24', count: 9 },
  { date: '2023-07-25', count: 2 },
  { date: '2023-07-26', count: 5 },
  { date: '2023-07-27', count: 3 },
  { date: '2023-07-28', count: 7 },
  { date: '2023-07-29', count: 4 },
  { date: '2023-07-30', count: 6 },
  { date: '2023-07-31', count: 9 },
  { date: '2023-08-01', count: 2 },
];

const timeSpent = [
  { date: '2023-06-01', count: 10 },
  { date: '2023-06-02', count: 15 },
  { date: '2023-06-03', count: 20 },
  { date: '2023-06-04', count: 25 },
  { date: '2023-06-05', count: 30 },
  { date: '2023-06-06', count: 35 },
  { date: '2023-06-07', count: 40 },
  { date: '2023-07-20', count: 45 },
  { date: '2023-07-21', count: 50 },
  { date: '2023-07-22', count: 55 },
  { date: '2023-07-23', count: 60 },
  { date: '2023-07-24', count: 65 },
  { date: '2023-07-25', count: 70 },
  { date: '2023-07-26', count: 75 },
  { date: '2023-07-27', count: 80 },
  { date: '2023-07-28', count: 85 },
  { date: '2023-07-29', count: 90 },
  { date: '2023-07-30', count: 95 },
  { date: '2023-07-31', count: 100 },
  { date: '2023-08-01', count: 105 },
];

const goodVsBadLogins = [
  { name: 'Good Logins', value: 200 },
  { name: 'Bad Logins', value: 20 },
];

export const fetchUsers = () => {
  return new Promise((resolve) => {
    resolve(userData);
  });
};

export const fetchUserStats = () => {
  return new Promise((resolve) => {
    resolve(userStats);
  });
};

export const fetchUserLogins = () => {
  return new Promise((resolve) => {
    resolve(userLogins);
  });
};

export const fetchGoodVsBadLogins = () => {
  return new Promise((resolve) => {
    resolve(goodVsBadLogins);
  });
};

export const fetchUserTimeSpent = () => {
  return new Promise((resolve) => {
    resolve(timeSpent);
  });
};
