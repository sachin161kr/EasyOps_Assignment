import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../pages/Home';
import AddOrder from '../pages/AddOrder';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

// Implementing Navigation betwwen Screens

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="orders">
        <Stack.Screen
          name="orders"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addOrder"
          component={AddOrder}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
