import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLocation } from '../redux/actions/locationActions';
import { TextField, Button, Box, Alert } from '@mui/material';

const AddLocationForm = () => {
  const [city, setCity] = useState('');
  const [localError, setLocalError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    const trimmed = city.trim();
    if (!trimmed) {
      setLocalError("City name cannot be empty");
      return;
    }
    try {
      await dispatch(addLocation(trimmed));
      setCity('');
    } catch (e) {
      // errors from redux
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>
      <TextField
        label="City name"
        variant="outlined"
        value={city}
        onChange={e => setCity(e.target.value)}
        error={Boolean(localError)}
        helperText={localError}
      />
      <Button variant="contained" type="submit">Add City</Button>
    </Box>
  );
};

export default AddLocationForm;
