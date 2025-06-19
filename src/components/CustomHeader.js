import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../common/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageNames from '../common/ImageNames';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title, hideBackIcon }) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: Colors.PRIMARY, width: '100%' }}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={[styles.headerContainer, { marginTop: top }]}>
        {!hideBackIcon && <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={ImageNames.backIcon}
            tintColor={Colors.WHITE}
          />
        </TouchableOpacity>}
        <Text style={styles.titleTest}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    height: 50,
    paddingHorizontal: 20,
    gap: 15
  },
  titleTest: {
    fontSize: 18,
    color: Colors.WHITE,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
});
