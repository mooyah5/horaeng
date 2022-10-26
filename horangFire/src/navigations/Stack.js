import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MissonHome from '../screens/mission';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // marginTop: 50,
          // marginHorizontal: 24,
          // marginBottom: 30,
        },
        presentation: 'card',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MissionHome" component={MissonHome} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
