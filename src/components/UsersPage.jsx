import React from 'react';
import { Grid, Typography } from '@mui/material';
import UsersTable from './UsersTable';
import UsersStats from './UsersStats';

const UsersPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Users
          </Typography>
          <UsersStats />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            User List
          </Typography>
          <UsersTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersPage;