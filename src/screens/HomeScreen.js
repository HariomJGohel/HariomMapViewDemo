import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import StaticText from '../common/StaticText';
import CustomButton from '../components/CustomButton';
import ScreenNames from '../common/ScreenNames';
import CustomHeader from '../components/CustomHeader';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMapData } from '../redux/reducers';

const HomeScreen = ({ navigation }) => {

  const url = 'https://api.sygictraveldata.com/v2.5/en/hotels/list/?adults=2&check_in=2025-06-19&check_out=2025-06-20&currency=USD&limit=50&bounds=22.965515078282593,72.51908888477644,23.077732321717406,72.64032471522356';

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(url);
    const array = await response.data.data.hotels;
    console.log(array);
    dispatch(setMapData(array));
  };

  return (
    <View style={styles.container}>

      <CustomHeader title={StaticText.home} hideBackIcon={true} />

      <CustomButton
        title={StaticText.popularPlaces}
        onPress={() => navigation.navigate(ScreenNames.POPULAR_PLACES)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
