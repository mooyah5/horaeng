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
import {useDispatch, useSelector} from 'react-redux';
import {selectBackgroundNumber} from '../store/background';
import {selectCharacter, setMyCharacter} from '../store/character';
import imagesPath from '../assets/image/constants/imagesPath';
import {selectUser} from '../store/user';
import {getDataInLocalStorage} from '../store/AsyncService';
import api from '../api/api_controller';
import {setBackgroundNumber} from '../store/background';
import {selectHaveBackground, setHaveBackground} from '../store/haveBackground';

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
    fontFamily: font.beeMid,
    fontSize: 30,
    color: color.BROWN_47,
    paddingLeft: '10%',
    textShadowColor: 'white',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 0.5,
    marginRight: 8,
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
    fontFamily: font.beeMid,
    fontSize: 15,
    color: color.BROWN_47,
    textAlign: 'center',
    paddingBottom: '5%',
  },
  missionBottomText1: {
    fontFamily: font.beeMid,
    fontSize: 15,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  missionBottomText2: {
    fontFamily: font.beeMid,
    fontSize: 15,
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
    resizeMode: 'contain',
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
    fontFamily: font.beeMid,
    fontSize: 15,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  textWidthImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const BACKGROUND = [
  require('../assets/image/background/forest_background.jpeg'),
  require('../assets/image/background/greenForest_background.jpeg'),
  require('../assets/image/background/london_background.jpeg'),
  require('../assets/image/background/ocean_background.jpeg'),
  require('../assets/image/background/snow_background.png'),
  require('../assets/image/background/sakura_background.png'),
  require('../assets/image/background/effel2_background.jpeg'),
  require('../assets/image/background/lotte_background.jpeg'),
];

export const CHARACTER = [
  require('../assets/image/animals/left/tiger_level1_left.gif'),
  require('../assets/image/animals/left/tiger_level2_left.gif'),
  require('../assets/image/animals/left/tiger_level3_left.gif'),
  require('../assets/image/animals/left/bird_level1_left.gif'),
  require('../assets/image/animals/left/bird_level2_left.gif'),
  require('../assets/image/animals/left/bird_level3_left.gif'),
  require('../assets/image/animals/left/elephant_level1_left.gif'),
  require('../assets/image/animals/left/elephant_level2_left.gif'),
  require('../assets/image/animals/left/elephant_level3_left.gif'),
  require('../assets/image/animals/left/turtle_level1_left.gif'),
  require('../assets/image/animals/left/turtle_level1_left.gif'),
  require('../assets/image/animals/left/turtle_level1_left.gif'),
  require('../assets/image/animals/left/penguin_level1_left.gif'),
  require('../assets/image/animals/left/penguin_level2_left.gif'),
  require('../assets/image/animals/left/penguin_level3_left.gif'),
];

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Home'>;
}

const Home = ({navigation}: Props) => {
  const dispatch = useDispatch();
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
    if (character?.todayMain) {
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

  const [characterNum, setCharacterNum] = useState<number>(0);

  useEffect(() => {
    if (specieName === 'tiger' && characterLv === 'LEVEL_1') {
      setCharacterNum(0);
    }
    if (specieName === 'tiger' && characterLv === 'LEVEL_2') {
      setCharacterNum(1);
    }
    if (specieName === 'tiger' && characterLv === 'LEVEL_3') {
      setCharacterNum(2);
    }
    if (specieName === 'bird' && characterLv === 'LEVEL_1') {
      setCharacterNum(3);
    }
    if (specieName === 'bird' && characterLv === 'LEVEL_2') {
      setCharacterNum(4);
    }
    if (specieName === 'bird' && characterLv === 'LEVEL_3') {
      setCharacterNum(5);
    }
    if (specieName === 'elephant' && characterLv === 'LEVEL_1') {
      setCharacterNum(6);
    }
    if (specieName === 'elephant' && characterLv === 'LEVEL_2') {
      setCharacterNum(7);
    }
    if (specieName === 'elephant' && characterLv === 'LEVEL_3') {
      setCharacterNum(8);
    }
    if (specieName === 'turtle' && characterLv === 'LEVEL_1') {
      setCharacterNum(9);
    }
    if (specieName === 'turtle' && characterLv === 'LEVEL_2') {
      setCharacterNum(10);
    }
    if (specieName === 'turtle' && characterLv === 'LEVEL_3') {
      setCharacterNum(11);
    }
    if (specieName === 'penguin' && characterLv === 'LEVEL_1') {
      setCharacterNum(12);
    }
    if (specieName === 'penguin' && characterLv === 'LEVEL_2') {
      setCharacterNum(13);
    }
    if (specieName === 'penguin' && characterLv === 'LEVEL_3') {
      setCharacterNum(14);
    }
  }, [specieName, characterLv, characterNum]);

  const [showOption, setShowOption] = useState(false);

  const [savedBgNumber, setSavedBgNumber] = useState<number>(1);
  const [savedCheck, setSavedCheck] = useState<boolean>(false);
  const haveBackground = useSelector(selectHaveBackground);
  const [hadCheck, setHadCheck] = useState<boolean>(false);

  const handleBackgroundOption = () => {
    navigation.navigate('BackgroundOption');
  };

  useEffect(() => {
    const getBackground = async () => {
      const bgNumber = await getDataInLocalStorage('background_number');
      setSavedCheck(true);

      if (bgNumber) {
        setSavedBgNumber(bgNumber);
      }
    };

    const getUserBg = async () => {
      try {
        const response = await api.background.getUserBackground(nowUser.id);
        setHadCheck(true);

        const list: number[] = [];

        for (const bg of response.data) {
          list.push(bg.backgroundId);
        }

        dispatch(setHaveBackground(list));
      } catch (err) {
        console.error(err);
      }
    };

    getBackground();
    getUserBg();
  }, []);

  useEffect(() => {
    if (savedCheck && hadCheck) {
      if (haveBackground.includes(savedBgNumber + 1)) {
        dispatch(setBackgroundNumber(savedBgNumber));
      } else {
        dispatch(setBackgroundNumber(character?.userCharacter?.character_id));
      }
    }
  }, [savedBgNumber, haveBackground]);

  const handleDiariesButton = () => {
    navigation.navigate('ListOfDiaries', {
      characterId: character?.userCharacter?.id,
    });
  };

  useEffect(() => {
    const getNowUserCharacter = async (id: string) => {
      const response = await api.character.getNowUserCharacter(id);

      if (response.data.userCharacter) {
        dispatch(setMyCharacter({character: response.data}));
      }
    };

    getNowUserCharacter(nowUser.id);
  }, []);

  return (
    <ImageBackground
      source={BACKGROUND[backgroundNumber]}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.section0}>
          <View style={styles.section0BtnContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoModal')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttons}
                source={require('../assets/image/icon/video.png')}
              />
            </TouchableOpacity>
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
              onPress={handleBackgroundOption}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttons}
                source={require('../assets/image/icon/changeBackground.png')}
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
                style={styles.buttons}
                source={require('../assets/image/icon/commu.png')}
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
              source={CHARACTER[characterNum]}
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
              <Text style={styles.missionBottomText2}>COMPLETE!! 🎉</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('MissionHome')}>
              {todayMissionStatus() ? (
                <Text style={styles.missionBottomText3}>
                  공통 미션 수행하기
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
                style={styles.buttons}
                source={require('../assets/image/icon/history.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // diary icon
              onPress={handleDiariesButton}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttons}
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
