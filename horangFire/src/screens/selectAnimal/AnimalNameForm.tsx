import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_long';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#FFD783',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontFamily: font.beeBold,
    fontSize: 40,
    color: color.BROWN_47,
    textAlign: 'center',
    marginBottom: 16,
  },
  textInputContainer: {
    ...Platform.select({
      android: {
        width: '55%',
        borderWidth: 1,
        borderTopColor: '#FFD783',
        borderLeftColor: '#FFD783',
        borderRightColor: '#FFD783',
        borderBottomColor: color.BROWN_47,
      },
      ios: {
        width: '55%',
        borderWidth: 1,
        borderTopColor: '#FFD783',
        borderLeftColor: '#FFD783',
        borderRightColor: '#FFD783',
      },
    }),
  },
  userInput: {
    ...Platform.select({
      ios: {
        borderBottomColor: color.BROWN_47,
        fontFamily: font.beeBold,
        color: color.BROWN_47,
        textAlign: 'center',
        fontSize: 40,
      },
      android: {
        fontFamily: font.beeBold,
        color: color.BROWN_47,
        textAlign: 'center',
        fontSize: 40,
      },
    }),
  },
  btns: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'AnimalNameForm'>;
}

const AnimalNameForm = ({navigation}: Props) => {
  const [animalName, setAnimalName] = useState('');

  return (
    <View style={styles.backgroundColor}>
      <SafeAreaView>
        <View style={styles.section1}></View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>내 벵갈 호랑이의 이름은</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.userInput}
              onChangeText={setAnimalName}
              value={animalName}
            />
          </View>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
          <Btn
            txt="다음으로"
            clickEvent={() => navigation.navigate('AnimalNameConfirm')}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AnimalNameForm;
