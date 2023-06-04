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
