import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

const styles = StyleSheet.create({
  text: {
    fontFamily: font.beeBold,
    fontSize: 100,
    color: color.BLACK_3A,
  },
  body: {
    width: '100%',
    height: '100%',
  }
});

const Community = ({navigation}: any) => {
  return (
    <ImageBackground source={require("../assets/image/background1.png")}>
      <View style={styles.body}>
        <Text style={styles.text}>/community</Text>
        <Button title="login" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

export default Community;
