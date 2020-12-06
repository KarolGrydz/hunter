import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import myIcon from '../constants/icon';
import { observable$, filterLocation } from '../utils/mapAPI';

const useStyles = makeStyles(() => ({
  map: {
    height: '300px',
  },
}));

const Map = () => {
  const [elements, setElements] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    observable$.subscribe((res) => {
      setElements(filterLocation(res));
    });
  }, []);

  return (
    <MapContainer
      center={[51.11535749698708, 17.034426774577256]}
      zoom={7}
      className={classes.map}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {elements.length ? elements.map(({ location, id }) => (
        <React.Fragment key={id}>
          {location.length && (
          <Marker position={location.split(',')} icon={myIcon} key={id}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
          )}
        </React.Fragment>
      )) : null}
    </MapContainer>
  );
};

export default Map;
