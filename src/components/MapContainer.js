import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };
  const companyLocation = { lat: 47.43023369577387, lng: 8.542717511541522 };

  console.log(process.env.GATSBY_GOOGLE_API_KEY);
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
  apiKey: '',
})(MapContainer);
