import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../common/colors';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.titleTest}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 55,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  titleTest: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});
