import React from "react";


// Modules
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

// Utils
import cx from "utils/styles"; // eslint-disable-line import/extensions

// Style
import fancyMapStyles from "./fancyMapStyles";


// Components
// import Container from "components/Container/";


// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// then wraps it into `withScriptjs` HOC
// It loads Google Maps JavaScript API v3 for you asynchronously.
// Name the component AsyncGoogleMap
const AsyncGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={ props.onMapLoad }
        zoom={ 14 }
        center={ {
          lat: 40.81497363,
          lng: -73.91,
        } }
        defaultOptions={ {
          draggable: false,
          scrollwheel: false,
          mapTypeControl: false,
          panControl: false,
          streetViewControl: false,
          zoomControl: false,
          styles: fancyMapStyles,
        } }
      >
        { props.markers.map(marker => (
          <Marker
            { ...marker }
            onClick={ () => props.onMarkerClick(marker) }
          >
            {marker.showInfo && (
              <InfoWindow onCloseClick={ () => props.onMarkerClose(marker) }>
                <div>{marker.infoContent}</div>
              </InfoWindow>
            )}
          </Marker>
        )) }
      </GoogleMap>
    )
  )
);

/**
 * ContactMap  Component
 */
export default class ContactMap extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.state = {
      markers: [{
        zoom: 18,
        showInfo: true,
        infoContent: (
          <div>
            <h3 className={ cx("ma0", "b") }>Headquarters</h3>
            <h5 className={ cx("ma0", "b") }>NY</h5>
            <p className={ cx("ma0") }>2289 5th Ave,</p>
            <p className={ cx("ma0") }>New York, NY, 10037</p>
          </div>
        ),
        position: {
          lat: 40.81497363,
          lng: -73.9356328,
        },
        key: "New York",
        defaultAnimation: 2,
      }],
    };
  }

  // Toggle to "true" to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    // Change with your api key
    const googleAPIMapKey = "AIzaSyCSy3iE7BrnAhXFfv9fq1TJkCVcykAQbiI";
    const googleUrl = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=visualization&key=";

    const googleMapURL = googleUrl + googleAPIMapKey;

    return (
      <AsyncGoogleMap
        googleMapURL={ googleMapURL }
        loadingElement={ <div style={ { height: "100%" } } /> }
        containerElement={ <div style={ { height: "100%" } } /> }
        mapElement={ <div style={ { height: "100%" } } /> }
        markers={ this.state.markers }
        onMarkerClick={ this.handleMarkerClick }
        onMarkerClose={ this.handleMarkerClose }
      />
    );
  }
}
