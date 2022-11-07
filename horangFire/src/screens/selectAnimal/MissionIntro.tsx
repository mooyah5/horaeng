import React, {useState, useEffect} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_short';

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  Alert,
  BackHandler,
} from 'react-native';
import {scriptIntro} from '../../script/scriptIntro';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import api from '../../api/api_controller';

const styles = StyleSheet.create({
  section1: {
    flex: 4,
  },
  section2: {
    flex: 4,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },
  section3: {
    flex: 10,
    paddingHorizontal: 24,
  },
  section4: {
    flex: 3,
    paddingHorizontal: 24,
  },
  backgroundColor: {
    backgroundColor: '#FFD783',
    width: '100%',
    height: '100%',
  },
  missionBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  missionText: {
    paddingHorizontal: 30,
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: '70%',
    height: '80%',
  },
  characterName: {
    textAlign: 'center',
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BROWN_47,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'MissionIntro'>;
  route: any;
}

interface Dialog {
  id: number;
  dialog: string;
  characters_id: number;
  characterDialogType: string;
}

const MissionIntro = ({navigation, route}: Props) => {
  const [characterDialog, setCharacterDialog] = useState<Dialog[]>([]);
  const {params} = route;
  const characterName = params.animalName;
  const selectedCharacterSpecies = params.selectedCharacterSpecies;
  const selectedCharacterId = params.selectedCharacterId;

  const [scriptNum, setScriptNum] = useState<number>(1);
  const getCharacterDialog = async () => {
    try {
      const response = await api.character.getCharacterDialog(
        selectedCharacterId,
      );
      setCharacterDialog(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacterDialog();
  }, []);

  useEffect(() => {
    console.log(characterDialog);
  }, [characterDialog]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('성냥팔이 호랭이', '앱을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        {text: '확인', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const handleScriptNum = () => {
    if (scriptNum < 7) {
      setScriptNum(prev => prev + 1);
    }
  };

  const startButton = () => {
    if (scriptNum === 7) {
      return (
        <Btn txt="start!" clickEvent={() => navigation.navigate('Home')} />
      );
    } else {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View style={styles.section1} />
      <Pressable onPress={handleScriptNum} style={styles.section2}>
        <Image
          style={styles.missionBack}
          source={require('../../../src/assets/image/b.png')}
        />
        <Text style={styles.missionText}>
          {scriptIntro[selectedCharacterSpecies][`${scriptNum}`]}
        </Text>
      </Pressable>
      <View style={styles.section3}>
        <Pressable style={styles.imageContainer} onPress={handleScriptNum}>
          <Image
            style={styles.characterImage}
            source={require('../../assets/image/character/tiger.png')}
          />
          <Text style={styles.characterName}>{characterName}</Text>
        </Pressable>
      </View>
      <View style={styles.section4}>{startButton()}</View>
    </SafeAreaView>
  );
};

export default MissionIntro;
