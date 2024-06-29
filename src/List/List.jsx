import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles.js';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('cafe');  // Ubah dari array ke string
  const [rating, setRating] = useState('');  // Inisialisasi rating

  return (
    <div className={classes.container}>
      <Typography variant="h4">Tempat ngopi di Bandung</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="cafe">cafe</MenuItem>
          <MenuItem value="hotel">hotel</MenuItem>
          <MenuItem value="tempat_wisata">tempatewisata</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
          labelId="rating-label"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
