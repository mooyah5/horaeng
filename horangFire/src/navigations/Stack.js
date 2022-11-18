import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

import Login from '../screens/login/Login';

import ReportModal from '../components/options/ReportModal';
import ReportApplyModal from '../components/options/ReportApplyModal';

import SelectAnimal from '../screens/selectAnimal/index';
import AnimalNameForm from '../screens/selectAnimal/AnimalNameForm';
import AnimalNameConfirm from '../screens/selectAnimal/AnimalNameConfirm';
import MissionIntro from '../screens/selectAnimal/MissionIntro';

// mission page & modal
import MissionHome from '../screens/mission/index';
import MainMission from '../screens/mission/mainMission';
import CommonMission from '../screens/mission/commonMission';
import LookCommon from '../screens/mission/lookCommon';
import SubmitMission from '../screens/mission/submitMission';
import CameraModal from '../components/mission/CameraModal';

// youtube modal
import VideoModal from '../components/options/VideoWatch';

// import Notice from '../screens/community/Notice';
import NoticeDetail from '../screens/community/NoticeDetail';
import Community from '../screens/community/index';
import CommunityDetail from '../screens/community/CommunityDetail';
import CommunityModal from '../components/community/CommunityModal';

import History from '../screens/collection/History';
import InfoOfAnimal from '../components/collection/InfoOfAnimal';
import ListOfDiaries from '../components/collection/ListOfDiaries';
import DiaryDetail from '../components/collection/DiaryDetail';
import MissionComplete from '../screens/selectAnimal/MissionComplete';

// option Modal
import SelectModal from '../components/options/SelectModal';
import ApplyModal from '../components/options/ApplyModal';

import Option from '../components/options/Options';
import BackgroundOption from '../components/options/BackgroundOption';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      {/* mission page */}
      <Stack.Group screenOptions={{presentation: 'card'}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="SelectAnimal" component={SelectAnimal} />
        <Stack.Screen name="AnimalNameForm" component={AnimalNameForm} />
        <Stack.Screen name="AnimalNameConfirm" component={AnimalNameConfirm} />
        <Stack.Screen
          name="MissionIntro"
          component={MissionIntro}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="MissionComplete" component={MissionComplete} />

        {/* mission page */}
        <Stack.Screen name="MissionHome" component={MissionHome} />
        <Stack.Screen name="MainMission" component={MainMission} />
        <Stack.Screen name="SubmitMission" component={SubmitMission} />
        <Stack.Screen name="LookCommon" component={LookCommon} />
        <Stack.Screen name="CommonMission" component={CommonMission} />

        {/* community page  */}
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="NoticeDetail" component={NoticeDetail} />
        <Stack.Screen name="CommunityDetail" component={CommunityDetail} />

        {/* collection page */}
        <Stack.Screen name="Collection" component={History} />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name="SelectModal" component={SelectModal} />
        <Stack.Screen name="ApplyModal" component={ApplyModal} />
        <Stack.Screen name="ReportModal" component={ReportModal} />
        <Stack.Screen name="ReportApplyModal" component={ReportApplyModal} />
        <Stack.Screen name="InfoOfAnimal" component={InfoOfAnimal} />
        <Stack.Screen name="ListOfDiaries" component={ListOfDiaries} />
        <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
        <Stack.Screen name="CameraModal" component={CameraModal} />
        <Stack.Screen name="CommunityModal" component={CommunityModal} />

        {/* option page */}
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="BackgroundOption" component={BackgroundOption} />
        <Stack.Screen name="VideoModal" component={VideoModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
