import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = coords || { lat: -6.9175, lng: 107.6191 }; // Default coordinates to Bandung

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBe1sqVJRAjtPF-rj7hvEYkiEJF0VTQeqo' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
