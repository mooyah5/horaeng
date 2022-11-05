import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_long';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

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
  },
  btns: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'AnimalNameConfirm'>;
  route: any;
}
const AnimalNameConfirm = ({navigation, route}: Props) => {
  const {params} = route;
  const characterName = params.animalName;
  const selectedCharacterId = params.selectedCharacterId;
  const selectedCharacterSpecies = params.selectedCharacterSpecies;

  const nickNameConfirm = (name: string) => {
    // http://{{character-service}}/character-service/user-character 여기다가 보내자!
    navigation.navigate('MissionIntro', {
      animalName: name,
      selectedCharacterSpecies: selectedCharacterSpecies,
    });
  };
  return (
    <View style={styles.backgroundColor}>
      <SafeAreaView>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{characterName}(이)랑 함께</Text>
          <Text style={styles.text1}>미션을 시작해 볼까?</Text>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
          <Btn
            txt="다음으로"
            clickEvent={() => nickNameConfirm(characterName)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AnimalNameConfirm;
