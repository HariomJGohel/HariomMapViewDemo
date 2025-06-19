import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;
