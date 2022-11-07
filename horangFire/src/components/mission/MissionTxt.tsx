import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import ImagePicker from './ImagePicker';

type missionProps = {
  mission: string;
  setDiary: React.Dispatch<React.SetStateAction<string>>;
  navigation: StackNavigationProp<ParamListBase, 'MainMission'>;
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
const MissionTxt = ({mission, setDiary, navigation}: missionProps) => {
  // function changeInput() {}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mission} 미션</Text>
      <ImagePicker navigation={navigation} />

      <TextInput
        style={styles.input}
        placeholder="200자로 미션을 하면서 느낀 점을 기록해볼까?"
        autoCapitalize="none"
        maxLength={200}
        multiline={true}
        scrollEnabled={true}
        onChangeText={text => setDiary(text)}
      />
    </View>
  );
};

export default MissionTxt;
