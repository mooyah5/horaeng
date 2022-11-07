import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import SplashScreen from 'react-native-splash-screen';
import store from './store/index';
import {Provider} from 'react-redux';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  main: {
    width: '100%',
    height: '100%',
  },
});

export default function App() {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } catch (err) {
      console.error(err);
    }
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
