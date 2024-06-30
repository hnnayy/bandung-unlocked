import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';


const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('cafe');  // Ubah dari array ke string
  const [rating, setRating] = useState('');  // Inisialisasi rating

  const places = [
    { name: 'Paling Nyaman'},
    { name: 'Sering Dikunjungi'},
    { name: 'Burger Terenak'},
    { name: 'Paling Nyaman'},
    { name: 'Sering Dikunjungi'},
    { name: 'Burger Terenak'},
    { name: 'Paling Nyaman'},
    { name: 'Sering Dikunjungi'},
    { name: 'Burger Terenak'}
  ];

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
          <MenuItem value="tempat_wisata">tempat wisata</MenuItem>
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
      
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i)=> (
          <Grid item key={i} xs = {12}>
            <PlaceDetails place ={place}/>
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

export default List;
