import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px'
};
export class MapContainer extends Component {
    state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
    });
    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    };
    
    render() {
        return (
            <div className="contact-location-map">
                <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={{ lat: 49.224726, lng: -123.108698}} >
                    <Marker onClick={this.onMarkerClick} name={'Langara College'}/>
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose} >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
          )
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAOWiSpvUjvww_EKXfphNg87bpsgqxnG9w'
})(MapContainer);