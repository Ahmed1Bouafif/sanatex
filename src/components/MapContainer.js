import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  const companyLocation = { lat: 47.39598756385111, lng: 8.422641053966395 };

  return (
    <Map
      google={props.google}
      zoom={16}
      style={mapStyles}
      initialCenter={companyLocation}
    >
      <Marker position={companyLocation} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'APIKey',
})(MapContainer);
