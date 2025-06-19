import React from 'react';
import ScreenNames from '../common/ScreenNames';
import HomeScreen from '../screens/HomeScreen';
import PopularPlacesScreen from '../screens/PopularPlaces';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddPlaceScreen from '../screens/AddPlaceScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ScreenNames.HOME_SCREEN}
      >
        <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.POPULAR_PLACES} component={PopularPlacesScreen} />
        <Stack.Screen name={ScreenNames.ADD_PLACE} component={AddPlaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
