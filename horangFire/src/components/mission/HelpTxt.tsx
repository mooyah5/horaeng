import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

type missionProps = {
  imgUrl: string;
  info: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: font.beeBold,
    fontSize: 28,
    color: color.BLACK_3A,
    marginBottom: 12,
  },
  how: {
    fontFamily: font.beeBold,
    fontSize: 15,
    color: color.BLACK_3A,
    width: '63%',
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
  photo: {
    borderRadius: 20,
    width: '65%',
    height: '35%',
    marginBottom: 16,
    overflow: 'hidden',
  },
  explain: {
    width: '70%',
    height: '25%',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    fontFamily: font.beeBold,
    fontSize: 16,
  },
  explainTitle: {
    fontFamily: font.beeBold,
    fontSize: 20,
  },
  temp: {
    width: '100%',
    height: '100%',
  },
});

const MissionTxt = ({imgUrl, info}: missionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>사진 인증 미션 안내</Text>
      <Text style={styles.how}>** 예시 사진 안내</Text>
      <View style={styles.photo}>
        <Image style={styles.temp} source={{uri: imgUrl}} />
      </View>
      <Text style={styles.explain}>{info}</Text>
    </View>
  );
};

export default MissionTxt;
