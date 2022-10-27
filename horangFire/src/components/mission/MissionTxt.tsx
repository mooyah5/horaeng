import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

type missionProps = {
  mission: string;
  diary: string;
  isMain: boolean;
  setDiary: React.Dispatch<React.SetStateAction<string>>;
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
    // marginTop: 40,
  },
  photo: {
    backgroundColor: 'rgba(255, 247, 234, 0.69)',
    borderRadius: 20,
    width: '70%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  photoTxt: {
    fontFamily: font.beeBold,
    fontSize: 16,
    textAlign: 'center',
    color: color.BROWN_47,
  },
  input: {
    width: '70%',
    height: '25%',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    fontFamily: font.beeBold,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  box: {
    position: 'absolute',
    width: 307,
    height: 430,
  },
});

const MissionTxt = ({mission, diary, isMain, setDiary}: missionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>'{mission}' 미션</Text>
      <View style={styles.photo}>
        {isMain && (
          <Text style={styles.photoTxt}>
            사진을 업로드하면 {'\n'} 추가 포인트를 받을 수 있어!{'\n'}
            (? 버튼으로 자세한 사항을 확인해봐!)
          </Text>
        )}
        {!isMain && (
          <Text style={styles.photoTxt}>
            공통 미션에는 {'\n'} 사진 업로드가 필수야!{'\n'}
            (? 버튼으로 자세한 사항을 확인해봐!)
          </Text>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="200자로 미션을 하면서 느낀 점을 기록해볼까?"
        autoCapitalize="none"
        maxLength={200}
        multiline={true}
        scrollEnabled={true}
        // onChange={event => {
        //   const {eventCount, target, text} = event.nativeEvent;
        //   setDiary(text);
        // }}
      />
    </View>
  );
};

export default MissionTxt;
