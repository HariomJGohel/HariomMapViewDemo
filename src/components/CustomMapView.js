import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const CustomMapView = ({ mapData }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const coordinateArray = mapData;

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: coordinateArray[0]?.place?.location?.lat,
          longitude: coordinateArray[0]?.place?.location?.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: windowHeight, width: windowWidth }}
      >
        {coordinateArray?.map(item => {
          if (typeof item?.place?.location?.lat === 'number' && typeof item?.place?.location?.lng === 'number') {
            return (
              <Marker
                key={item?.place?.id}
                coordinate={{
                  latitude: item?.place?.location?.lat,
                  longitude: item?.place?.location?.lng,
                }}
              />
            );
          }
        })}
      </MapView>
    </View>
  );
};

export default CustomMapView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backfaceVisibility: 'red',
  },
});
