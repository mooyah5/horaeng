import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 105,
    height: 59,
    resizeMode: 'contain',
  },
  txt: {
    position: 'absolute',
    fontFamily: font.beeBold,
    fontSize: 28,
    color: color.BROWN_47,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

type btnTypes = {
  txt: string;
  clickEvent: Function;
};

const Btn = ({txt, clickEvent}: btnTypes) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => clickEvent()}>
      <Image
        style={styles.img}
        source={require('../../assets/image/btn_short.png')}
      />
      <Text style={styles.txt}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
