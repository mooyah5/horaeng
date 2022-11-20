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
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 40,
  },
  top: {
    fontSize: 24,
    fontFamily: font.beeMid,
    color: color.BLACK_3A,
  },

  bottom: {
    fontSize: 34,
    fontFamily: font.beeMid,
    color: color.BLACK_3A,
  },
});

const TitleText = ({title, subTitle}: titleProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.top}>{title}</Text>
        <Text style={styles.bottom}>{subTitle}</Text>
      </View>
    </>
  );
};

export default TitleText;
