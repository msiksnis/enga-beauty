import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
        />
      );
    });
  };

  render() {
    const mapStyles = {
      maxWidth: "670px",
      maxHeight: "300px",
    };
    return (
      <div className="">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 59.9159, lng: 10.7129 }}
          style={mapStyles}
        >
          <Marker
            title={"The marker`s title will appear as a tooltip."}
            name={"SOMA"}
            position={{ lat: 59.9159, lng: 10.7129 }}
            icon={{
              url: "/path/to/custom_icon.png",
            }}
          />
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y",
})(GoogleMaps);
