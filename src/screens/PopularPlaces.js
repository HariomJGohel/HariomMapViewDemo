import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import ImageNames from '../common/ImageNames';
import ScreenNames from '../common/ScreenNames';
import StaticText from '../common/StaticText';
import Colors from '../common/colors';
import CustomHeader from '../components/CustomHeader';
import CustomMapView from '../components/CustomMapView';

const PopularPlacesScreen = ({ navigation }) => {

  const [isMapSelected, setIsMapSelected] = useState(true);

  const mapData = useSelector((state) => state.mapData.mapData);
  console.log("🚀 ~ PopularPlacesScreen ~ mapData:", mapData)

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.hotelImage}
          source={{ uri: item?.place?.thumbnail_url }}
        />

        <View style={{ flex: 1 }}>

          <Text style={styles.hotelNameText}>{item?.place?.name}</Text>
          <View style={styles.flexRow}>
            <Image
              source={ImageNames.locationIcon}
              style={styles.locationIcon}
              tintColor={Colors.GREY}
            />
            <Text style={styles.locationText}>{'' + item?.place?.name_suffix}</Text>
          </View>

          {item?.place?.star_rating_unofficial && <Text style={styles.locationText}>{`${StaticText.rating}:  ${item?.place?.star_rating_unofficial}`}</Text>}
        </View>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={ScreenNames.POPULAR_PLACES} />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            isMapSelected && { backgroundColor: Colors.PRIMARY },
          ]}
          onPress={() => setIsMapSelected(true)}
        >
          <Text
            style={[styles.tabText, isMapSelected && { color: Colors.WHITE }]}
          >
            {StaticText.map}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            !isMapSelected && { backgroundColor: Colors.PRIMARY },
          ]}
          onPress={() => setIsMapSelected(false)}
        >
          <Text
            style={[styles.tabText, !isMapSelected && { color: Colors.WHITE }]}
          >
            {StaticText.list}
          </Text>
        </TouchableOpacity>
      </View>

      {isMapSelected && mapData && <CustomMapView mapData={mapData} />}

      {!isMapSelected && mapData.length > 0 && (
        <>
          <FlatList
            data={mapData}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 25 }}
          />
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(ScreenNames.ADD_PLACE)}
          >
            <Text style={styles.addButtonText}>{`+ ${StaticText.addPlace}`}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default PopularPlacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  tabButton: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  itemContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: 20,
    gap: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
    shadowColor: Colors,
    shadowRadius: 10,
    elevation: 1,
  },
  hotelImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
    alignSelf: 'center',
  },
  hotelNameText: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  locationText: {
    fontSize: 14,
    color: Colors.GREY,
  },
  locationIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});
