import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {View, StyleSheet, ScrollView} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyB8Xn-La-_FAtGqDO9jqREINRuHYuhUKkE';

const MapArea = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />

      <View>
      <GooglePlacesAutocomplete
        placeholder="Search destination"
        minLength={2}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        onFail={error => console.error(error)}

      />
      </View>
  </View>
);
export default MapArea;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'gray',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textInputContainer: {
    backgroundColor: 'white',

    borderWidth: 0,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 10,
    width: 314,
    height: 40,
    borderRadius: 12,
  },
});
