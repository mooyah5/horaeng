import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

interface Props {
  value: string;
  label: string;
}
const styles = StyleSheet.create({
  radioBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 15,
  },
  text: {
    fontSize: 24,
    fontFamily: font.beeBold,
    color: color.BROWN_78,
    // textAlign: 'center',
  },
});
export default function ReactSimpleButton() {
  const data = [
    {
      value: '미션 미이행',
      message: '미션미이행: 미션에 맞지 않는 사진이나 게시물',
    },
    {
      value: '유해한 게시물',
      message:
        '유해한 사진, 글 혹은 광고성 게시물\n제출하실 경우 본인에게 해당 게시글이 더 이상 보이지 않게 됩니다.',
    },
  ];
  return (
    <View style={styles.radioBox}>
      {data.map((item, i) => {
        return (
          <Pressable key={i} onPress={() => alert(item.message)}>
            <Text style={styles.text}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
