import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  Alert,
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
  route: any;
}

const AnimalNameForm = ({navigation, route}: Props) => {
  const [animalName, setAnimalName] = useState('');
  const {params} = route;

  const selectedCharacterId = params.selectedCharacterId;
  const selectedCharacterName = params.selectedCharacterName;
  const selectedCharacterSpecies = params.selectedCharacterSpecies;

  const nickName = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

  const nickNameChk = (name: string) => {
    const result: boolean = nickName.test(name);
    if (result) {
      navigation.navigate('AnimalNameConfirm', {
        animalName: animalName,
        selectedCharacterId: selectedCharacterId,
        selectedCharacterSpecies: selectedCharacterSpecies,
      });
    } else {
      Alert.alert('닉네임은 한글,영어,숫자 포함 8자리 이하만 가능합니다.');
    }
  };

  return (
    <View style={styles.backgroundColor}>
      <SafeAreaView>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>
            내 {selectedCharacterName}(이)의 이름은
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.userInput}
              onChangeText={setAnimalName}
              value={animalName}
              maxLength={8}
            />
          </View>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
          <Btn txt="다음으로" clickEvent={() => nickNameChk(animalName)} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AnimalNameForm;
