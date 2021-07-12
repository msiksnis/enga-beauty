import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const defaultCenter = { lat: 59.9159, lng: 10.7129 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker
        position={defaultCenter}
        // icon={{
        //   url: "/images/Tag.png",
        // }}
      />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "280px" };
const mapElementStyle = { height: "100%" };

export default function GoogleMaps() {
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y"
      loadingElement={<div style={loadingElementStyle} />}
      containerElement={<div style={containerElementStyle} />}
      mapElement={<div style={mapElementStyle} />}
    />
  );
}
