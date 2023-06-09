import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../data/Users';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { json } from 'react-router-dom';

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
    if (currentData.length > 5) {
      setCurrentData([]);
    }
  }, [currentData]);

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 2000) + 1000;
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currentData &&
          currentData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default LatestUserDataTable;
