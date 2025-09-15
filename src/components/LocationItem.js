import React from 'react';
import { useDispatch } from 'react-redux';
import { updateLocationWeather, deleteLocation } from '../redux/actions/locationActions';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';

const LocationItem = ({ loc }) => {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(updateLocationWeather(loc.id));
  };

  const handleDelete = () => {
    dispatch(deleteLocation(loc.id));
  };

  return (
    <Card sx={{ width: 300, m: 1, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {loc.name}
        </Typography>
        <Typography variant="h6" sx={{ mt:1 }}>
          {loc.temperature != null ? `${loc.temperature} °C` : 'N/A'}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {loc.weatherDescription || ''}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
          Last Updated: {loc.lastUpdated ? new Date(loc.lastUpdated).toLocaleString() : 'Never'}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt:2 }}>
          <Button size="small" variant="outlined" onClick={handleRefresh}>Refresh</Button>
          <Button size="small" color="error" variant="outlined" onClick={handleDelete}>Delete</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LocationItem;
