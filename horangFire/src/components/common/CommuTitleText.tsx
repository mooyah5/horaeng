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
  },
  top: {
    fontSize: 20,
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
  },

  bottom: {
    fontSize: 50,
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
  },
  brown: {
    color: color.BROWN_78,
  },
});

const CommuTitleText = ({title, subTitle}: titleProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.bottom}>{subTitle}</Text>
        <Text style={styles.top}>{title}</Text>
      </View>
    </>
  );
};

export default CommuTitleText;
