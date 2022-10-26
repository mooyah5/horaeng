import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';

const styles = StyleSheet.create({
  container: {
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    width: '100%',
    height: '100%',
    backgroundColor: color.BACK_SUB,
  },
});
const MissonHome = () => {
  return (
    <View style={styles.container}>
      <TitleText title="위에 작성" subTitle="아래에 작성하세요" />
    </View>
  );
};

export default MissonHome;
