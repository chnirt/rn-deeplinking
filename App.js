import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, DetailScreen} from './src/screens';

const linking = {
  prefixes: ['chnirtapp://', 'https://chnirtapp.com'],
  config: {
    screens: {
      Home: 'home',
      Detail: 'detail/:userId',
    },
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
