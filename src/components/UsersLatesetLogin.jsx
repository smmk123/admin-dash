import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../data/Users';
import { AccountCircle } from '@mui/icons-material';

const LatestUserDataTable = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      fetchUsersData();
    }
  }, [data]);

  const fetchUsersData = async () => {
    const fetchedData = await fetchUsers();
    setData(fetchedData);
  };

  useEffect(() => {
    const interval = setInterval(addNewData, getRandomInterval());

    return () => {
      clearInterval(interval);
    };
  }, []);

  const addNewData = () => {
    if (data.length === 0) {
      fetchUsers().then((fetchedData) => {
        if (fetchedData.length > 0) {
          const randomIndex = Math.floor(Math.random() * fetchedData.length);
          const newUser = { ...fetchedData[randomIndex] };
          const isIdExists = currentData.some((user) => user.id === newUser.id);

          if (!isIdExists) {
            setCurrentData((prevData) => [...prevData, newUser]);
          }
        }
      });
    } else {
      const randomIndex = Math.floor(Math.random() * data.length);
      const newUser = { ...data[randomIndex] };
      const isIdExists = currentData.some((user) => user.id === newUser.id);

      if (!isIdExists) {
        setCurrentData((prevData) => [...prevData, newUser]);
      }
    }
  };

  useEffect(() => {
    if (currentData.length > 4) {
      setCurrentData([]);
    }
  }, [currentData]);

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 2000) + 1000;
  };

  return (
    <>
      <AccountCircle />
      <h3 className="text-lg text-center font-medium mb-2">Users Logging In</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LatestUserDataTable;
