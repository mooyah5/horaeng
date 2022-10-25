import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={
        {headerShown: false, }
      }
      >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
