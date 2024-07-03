import React from 'react';
import GoogleMapReact from 'google-map-react';
import { colors, Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import { MapContainer,Polygon,TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import useStyles from './styles.js';
import './style.css';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coord = [-6.9175, 107.6191];

  const zonecoord = [
    [-6.9175, 107.6191],
    [-6.9175, 107.6191],
    [-6.9175, 107.6191],
    [-6.9175, 107.6191],
    [-6.9175, 107.6191]
  ];

  return (
      <div className={classes.mapContainer}>
          <MapContainer center = {coord} zoom = {14} >
            <TileLayer
              url = "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=EnfLZu4HVEonP8CqxdMv"
              attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Polygon
            positions={zonecoord}
            pathOptions={{color: 'blue'}}
            />
          </MapContainer>
      </div>
  );
};

export default Map;
