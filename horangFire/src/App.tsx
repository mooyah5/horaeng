import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import { BackHandler, StyleSheet, View } from 'react-native';
import { color } from './styles/theme';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  outer: {
    backgroundColor: color.BACK_SUB,
    flex: 1,
  },
  main: {
    paddingTop: 50,
    width: '100%',
    height: '100%',
    paddingBottom: 50,
    paddingLeft: 24,
    paddingRight: 24,
  }
})

export default function App() {
  return (
    <View style={styles.outer}>
      <NavigationContainer>
        <View style={styles.main}>
          <StackNavigation />
        </View>
      </NavigationContainer>
    </View>
  );
}
