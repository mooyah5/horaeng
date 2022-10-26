import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {color, font} from '../styles/colorAndFontTheme';

const styles = StyleSheet.create({
  text: {
    fontFamily: font.beeBold,
    fontSize: 100,
    color: color.BLACK_3A,
  },
  body: {
    width: '100%',
    height: '100%',
  },
});

const Home = ({navigation}: any) => {
  return (
    <ImageBackground source={require('../assets/image/background1.png')}>
      <View style={styles.body}>
        <Text style={styles.text}>안녕하세요</Text>
        <Button title="tj" onPress={() => navigation.navigate('MissionHome')} />
      </View>
    </ImageBackground>
  );
};

export default Home;
