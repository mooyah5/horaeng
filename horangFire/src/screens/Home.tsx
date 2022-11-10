import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import {color, font} from '../styles/colorAndFontTheme';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {scriptMain} from '../script/scriptMain';
import {useSelector} from 'react-redux';
import {selectBackgroundNumber} from '../store/background';
import {selectCharacter} from '../store/character';
import imagesPath from '../assets/image/constants/imagesPath';
import {selectUser} from '../store/user';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  section0: {
    flex: 2,
    borderColor: 'red',
  },
  section1: {
    flex: 3,
    borderColor: 'red',
  },
  section2: {
    flex: 4,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section3: {
    flex: 9,
  },
  section4: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section5: {
    flex: 2,
  },
  section0BtnContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  section0BtnContainerRight: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  buttonTouchable: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  buttons: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonsDiary: {
    width: '150%',
    height: '150%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonsCommu: {
    width: '160%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  buttonsBackground: {
    height: '150%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  buttonsCollection: {
    height: '150%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  characterText: {
    fontFamily: font.beeBold,
    fontSize: 40,
    color: color.BROWN_47,
    paddingLeft: '10%',
  },
  buttonTouchableNone: {
    backfaceVisibility: 'hidden',
  },
  missionBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  missionText: {
    paddingHorizontal: 50,
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
    textAlign: 'center',
    paddingBottom: '5%',
  },
  missionBottomText1: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  missionBottomText2: {
    fontFamily: font.beeBold,
    fontSize: 27,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: '70%',
    height: '100%',
  },
  mainBottomImage: {
    position: 'absolute',
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  messageBox: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  missionBottomText3: {
    fontFamily: font.beeBold,
    fontSize: 23,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  textWidthImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const BACKGROUND = [
  require('../assets/image/background/snow_background.png'),
  require('../assets/image/background/forest_background.png'),
  require('../assets/image/background/london_background.png'),
];

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Home'>;
}

const Home = ({navigation}: Props) => {
  const [scriptNum, setScriptNum] = useState<number>(1);
  const backgroundNumber = useSelector(selectBackgroundNumber);
  const character = useSelector(selectCharacter);
  const nowUser = useSelector(selectUser);

  const characterSpecies = character?.userCharacter?.character_id;
  const characterLv = character?.userCharacter?.characterLevel;

  const handleScriptNum = () => {
    if (scriptNum < 6) {
      setScriptNum(prev => prev + 1);
    }
    if (scriptNum === 6) {
      setScriptNum(1);
    }
  };

  useEffect(() => {
    const backAction = () => {
      console.log('눌렀다!');
      Alert.alert('성냥팔이 호랭이', '앱을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        {text: '확인', onPress: () => BackHandler.exitApp()},
        {text: '이전', onPress: () => navigation.goBack()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const missionStatus = () => {
    if (character?.userCharacter?.status) {
      return true;
    } else {
      return false;
    }
  };
  const [specieName, setSpecieName] = useState<string>('tiger');

  const todayMissionStatus = () => {
    if (character?.today) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const characterName = () => {
      let name = '';
      switch (characterSpecies) {
        case 1:
          name = 'tiger';
          break;
        case 2:
          name = 'bird';
          break;
        case 3:
          name = 'elephant';
          break;
        case 4:
          name = 'turtle';
          break;
        case 5:
          name = 'penguin';
          break;
      }

      return name;
    };

    setSpecieName(characterName());
  }, [characterSpecies]);
  const [showOption, setShowOption] = useState(false);

  return (
    <ImageBackground
      source={BACKGROUND[backgroundNumber]}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.section0}>
          <View style={styles.section0BtnContainer}>
            <View style={styles.buttonTouchableNone} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Option')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttons}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section0}>
          <View style={styles.section0BtnContainer}>
            <View style={styles.buttonTouchableNone} />
            <View>
              <TouchableOpacity
                style={styles.textWidthImage}
                onPress={() => {
                  setShowOption(!showOption);
                }}>
                {showOption ? (
                  <Text style={styles.characterText}>
                    성냥 {nowUser.point}개
                  </Text>
                ) : (
                  <Text style={styles.characterText}>
                    {character?.count} 일차
                  </Text>
                )}
                <Image
                  style={{
                    transform: [{rotate: showOption ? '180deg' : '0deg'}],
                  }}
                  source={imagesPath.icDropDownHome}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BackgroundOption')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttonsBackground}
                source={require('../assets/image/icon/background.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section0}>
          <View style={styles.section0BtnContainer}>
            <View style={styles.buttonTouchableNone} />
            <View>
              <Text style={styles.characterText}>
                {character?.userCharacter?.nickname}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Community')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttonsCommu}
                source={require('../assets/image/icon/commut.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.messageBox}>
            <Image
              style={styles.missionBack}
              source={require('../../src/assets/image/b.png')}
            />
            <TouchableOpacity onPress={handleScriptNum}>
              <Text style={styles.missionText}>
                {scriptMain[specieName][`${scriptNum}`]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section3}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.characterImage}
              source={require('../assets/image/character/tiger.png')}
            />
          </View>
        </View>
        <View style={styles.section4}>
          <Image
            style={styles.mainBottomImage}
            source={require('../assets/image/mainbottom.png')}
          />
          {missionStatus() ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MissionComplete', {
                  characterSpecies: characterSpecies,
                })
              }>
              <Text style={styles.missionBottomText1}>MISSION</Text>
              <Text style={styles.missionBottomText2}>COMPLETE!!</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('MissionHome')}>
              {todayMissionStatus() ? (
                <Text style={styles.missionBottomText3}>
                  오늘도 지구를 구했다! :)
                </Text>
              ) : (
                <Text style={styles.missionBottomText3}>
                  미션 수행하러 가기
                </Text>
              )}
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.section0}>
          <View style={styles.section0BtnContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Collection')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttonsCollection}
                source={require('../assets/image/icon/book.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ListOfDiaries')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttonsDiary}
                source={require('../assets/image/icon/diary.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
