import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import CommuTitleText from '../../components/common/CommuTitleText';

const styles = StyleSheet.create({
  text: {
    fontFamily: font.beeBold,
    fontSize: 100,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
    padding: 24,
    paddingTop: 40,
  }
});

const Community = ({navigation}: any) => {
  return (
    <ImageBackground source={require("../../assets/image/commuBack.png")}>
      <View style={styles.body}>
      <CommuTitleText title="뱅갈호랑이 | 공지사항" subTitle="Community" />
        <Button title="커뮤페이지로" onPress={() => navigation.navigate('Community_first')} />
      </View>
    </ImageBackground>
  );
};

export default Community;
