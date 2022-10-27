import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Start from '../screens/login/Start';
import Login from '../screens/login/Login';
import MissonHome from '../screens/mission';
import MainMission from '../screens/mission/mainMission';
import commonMission from '../screens/mission/commonMission';
import SubmitMission from '../screens/mission/submitMission';
import Community from '../screens/community/index';
import SelectAnimal from '../screens/selectAnimal/index';
import Collection from '../screens/collection/index';
import Community_first from '../screens/community/Community_first';
import CommonMission from '../screens/mission/commonMission';
import LookCommon from '../screens/mission/lookCommon';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        presentation: 'card',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />

      {/* mission page */}

      <Stack.Screen name="MissionHome" component={MissonHome} />
      <Stack.Screen name="MainMission" component={MainMission} />
      <Stack.Screen name="SubmitMission" component={SubmitMission} />
      <Stack.Screen name="LookCommon" component={LookCommon} />
      <Stack.Screen name="CommonMission" component={CommonMission} />

      {/* community page  */}

      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="SelectAnimal" component={SelectAnimal} />
      <Stack.Screen name="Collection" component={Collection} />
      <Stack.Screen name="Community_first" component={Community_first} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
