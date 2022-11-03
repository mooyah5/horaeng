import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

interface Props {
  id: number;
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
  press: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: font.beeBold,
    color: color.BROWN_78,
    // textAlign: 'center',
  },
});
export default function ReactSimpleButton() {
  const [checked, setChecked] = useState<number>(1);

  const data = [
    {
      id: 1,
      value: '미션 미이행',
      message: '미션미이행: 미션에 맞지 않는 사진이나 게시물',
    },
    {
      id: 2,
      value: '유해한 게시물',
      message:
        '유해한 사진, 글 혹은 광고성 게시물\n제출하실 경우 본인에게 해당 게시글이 더 이상 보이지 않게 됩니다.',
    },
  ];
  const HandleRadio = (itemId: number) => {
    setChecked(itemId);
  };
  return (
    <View style={styles.radioBox}>
      {data.map((item, i) => {
        return (
          <Pressable
            style={styles.press}
            key={i}
            onPress={() => HandleRadio(item.id)}>
            {item.id === checked ? (
              <Image
                style={styles.radio}
                source={require('../../assets/image/icon/radioChecked.png')}
              />
            ) : (
              <Image
                style={styles.radio}
                source={require('../../assets/image/icon/radioUnchecked.png')}
              />
            )}
            <Text style={styles.text}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
