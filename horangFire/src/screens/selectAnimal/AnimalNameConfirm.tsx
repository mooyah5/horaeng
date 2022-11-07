import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_long';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import api from '../../api/api_controller';

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

  const selectedCharacterName = params.animalName;
  const selectedCharacterId = params.selectedCharacterId;
  const selectedCharacterSpecies = params.selectedCharacterSpecies;
  const createCharacter = async () => {
    // http://{{character-service}}/character-service/user-character 여기다가 보내자!
    //   {
    //     "user_id" : 2,
    //     "character_id" : 1,
    //     "nickname" : "jeong"
    //    }

    try {
      const response = await api.character.create({
        user_id: 2,
        character_id: selectedCharacterId,
        nickname: selectedCharacterName,
      });

      if (response.status === 200) {
        navigation.navigate('MissionIntro', {
          animalName: response.data.nickname,
          selectedCharacterSpecies: selectedCharacterSpecies,
          selectedCharacterId: selectedCharacterId,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.backgroundColor}>
      <SafeAreaView>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{selectedCharacterName}(이)랑 함께</Text>
          <Text style={styles.text1}>미션을 시작해 볼까?</Text>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
          <Btn txt="다음으로" clickEvent={() => createCharacter()} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AnimalNameConfirm;
