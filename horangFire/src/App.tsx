import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import SplashScreen from 'react-native-splash-screen';
import store from './store/index';
import {Provider} from 'react-redux';

import Sound from 'react-native-sound';
import {getDataInLocalStorage} from './store/AsyncService';

Sound.setCategory('SoloAmbient');

export const sound = new Sound(
  'example_sound.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('로드 실패', error);
      return;
    }
    // if loaded successfully
    console.log('재생 시간 : ' + sound.getDuration());

    sound.play(success => {
      if (success) {
        console.log('재생 완료');
      } else {
        console.log('재생 실패');
      }
    });

    sound.setNumberOfLoops(-1);
  },
);

export default function App() {
  const setInitialVolume = async () => {
    const volume = await getDataInLocalStorage('bgmVolume');

    if (volume) {
      sound.setVolume(volume);
    }
  };

  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    setInitialVolume();
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.outer}>
        <NavigationContainer>
          <View style={styles.main}>
            <StackNavigation />
          </View>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  main: {
    width: '100%',
    height: '100%',
  },
});
