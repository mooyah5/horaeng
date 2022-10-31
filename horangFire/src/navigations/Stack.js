import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Start from '../screens/login/Start';
import Login from '../screens/login/Login';
import MissonHome from '../screens/mission/';
import MainMission from '../screens/mission/mainMission';
import SubmitMission from '../screens/mission/submitMission';
import Community from '../screens/community/index';
import SelectAnimal from '../screens/selectAnimal/index';
import Collection from '../screens/collection/Collection';
import Community_first from '../screens/community/Community_first';
import AnimalNameForm from '../screens/selectAnimal/AnimalNameForm';
import AnimalNameConfirm from '../screens/selectAnimal/AnimalNameConfirm';
import MissionIntro from '../screens/selectAnimal/MissionIntro';
import Option from '../components/options/Options';
import BackgroundOption from '../components/options/BackgroundOption';
import CommonMission from '../screens/mission/commonMission';
import LookCommon from '../screens/mission/lookCommon';
import SelectModal from '../components/options/SelectModal';
import ApplyModal from '../components/options/ApplyModal';
import CollectionDetail from '../screens/collection/CollectionDetail';
import InfoOfAnimal from '../components/collection/InfoOfAnimal';
import ListOfDiaries from '../components/collection/ListOfDiaries';
import DiaryDetail from '../components/collection/DiaryDetail';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {/* mission page */}
      <Stack.Group screenOptions={{presentation: 'card'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="AnimalNameForm" component={AnimalNameForm} />
        <Stack.Screen name="AnimalNameConfirm" component={AnimalNameConfirm} />
        <Stack.Screen name="MissonIntro" component={MissionIntro} />
        {/* mission page */}

        <Stack.Screen name="MissionHome" component={MissonHome} />
        <Stack.Screen name="MainMission" component={MainMission} />
        <Stack.Screen name="SubmitMission" component={SubmitMission} />
        <Stack.Screen name="LookCommon" component={LookCommon} />
        <Stack.Screen name="CommonMission" component={CommonMission} />

        {/* community page  */}

        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="SelectAnimal" component={SelectAnimal} />
        <Stack.Screen name="Community_first" component={Community_first} />

        {/* option page */}
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="BackgroundOption" component={BackgroundOption} />

        {/* collection page */}
        <Stack.Screen name="Collection" component={Collection} />
        <Stack.Screen name="CollectionDetail" component={CollectionDetail} />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name="SelectModal" component={SelectModal} />
        <Stack.Screen name="ApplyModal" component={ApplyModal} />
        <Stack.Screen name="InfoOfAnimal" component={InfoOfAnimal} />
        <Stack.Screen name="ListOfDiaries" component={ListOfDiaries} />
        <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
