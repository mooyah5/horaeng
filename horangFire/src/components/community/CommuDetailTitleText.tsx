import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
type titleProps = {
  title: string;
  subTitle: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  top: {
    fontSize: 30,
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    textAlign: 'center',
  },

  bottom: {
    fontSize: 18,
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    textAlign: 'right',
  },
  brown: {
    color: color.BROWN_78,
  },
});

const TitleText = ({title, subTitle}: titleProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.top}>{title}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.bottom}>{subTitle}</Text>
      </View>
    </>
  );
};

export default TitleText;
