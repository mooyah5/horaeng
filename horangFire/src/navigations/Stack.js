import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/login/Login';
import MissonHome from '../screens/mission';
import Community from '../screens/community/index';
import SelectAnimal from '../screens/selectAnimal/index';
import Collection from '../screens/collection/index';
import Community_first from '../screens/community/Community_first';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Community"
      screenOptions={{
        headerShown: false,
        presentation: 'card',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MissionHome" component={MissonHome} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="SelectAnimal" component={SelectAnimal} />
      <Stack.Screen name="Collection" component={Collection} />
      <Stack.Screen name="Community_first" component={Community_first} />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;
