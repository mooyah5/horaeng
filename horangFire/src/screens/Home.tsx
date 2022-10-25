import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { color, font } from '../styles/theme';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: color.MAIN,
  },
  text: {
    fontFamily: font.beeBold,
    fontSize: 100,
    backgroundColor: color.MAIN
  }
});

const Home = ({navigation}: any) => {
  // console.log('home');
  return (
      <Text style={styles.text}>
        안녕하세요
      </Text>
      // <Button
      //   title="dddddddd"
      //   onPress={() => navigation.navigate('Login')} />
  );
};

export default Home;
