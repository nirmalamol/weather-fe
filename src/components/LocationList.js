import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchLocations,
  updateLocationWeather,
  deleteLocation,
} from '../redux/actions/locationActions';
import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';

const LocationList = () => {
  const { data, loading, error } = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  const handleRefresh = (id) => {
    dispatch(updateLocationWeather(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteLocation(id));
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography>No cities added. Add one above.</Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>City</strong></TableCell>
            <TableCell><strong>Temperature (°C)</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Last Updated</strong></TableCell>
            <TableCell align="center"><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((loc) => (
            <TableRow key={loc.id}>
              <TableCell>{loc.name}</TableCell>
              <TableCell>{loc.temperature != null ? `${loc.temperature} °C` : 'N/A'}</TableCell>
              <TableCell>{loc.weatherDescription || '—'}</TableCell>
              <TableCell>
                {loc.lastUpdated
                  ? new Date(loc.lastUpdated).toLocaleString()
                  : 'Never'}
              </TableCell>
              <TableCell align="center">
                <Tooltip title="Refresh Weather">
                  <IconButton onClick={() => handleRefresh(loc.id)}>
                    <RefreshIcon color="primary" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton onClick={() => handleDelete(loc.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LocationList;
