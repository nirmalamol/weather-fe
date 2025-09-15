import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddLocationForm from './components/AddLocationForm';
import LocationList from './components/LocationList';
import { Container, Typography, Box, Paper } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="md">
          <Paper sx={{ p:4, boxShadow: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h3" component="h1">Weather Dashboard</Typography>
            </Box>
            <AddLocationForm />
            <LocationList />
          </Paper>
        </Container>
      </Box>
    </Provider>
  );
}

export default App;
