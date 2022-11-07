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
  },
  buttons: {
    width: '100%',
    height: '100%',
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
    fontSize: 25,
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
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  messageBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Home'>;
}

const Home = ({navigation}: Props) => {
  const [scriptNum, setScriptNum] = useState<number>(1);

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
    return false;
  };

  return (
    <ImageBackground
      source={require('../../src/assets/image/background/london_background.png')}
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
              <Text style={styles.characterText}>n일차</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BackgroundOption')}
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
              <Text style={styles.characterText}>내호랭이최고</Text>
            </View>
            <TouchableOpacity
              //한나언니 페이지 커뮤니티
              onPress={() => navigation.navigate('Community')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttons}
                source={require('../assets/image/setting.png')}
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
                {scriptMain.tiger[`${scriptNum}`]}
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
              onPress={() => navigation.navigate('MissionComplete')}>
              <Text style={styles.missionBottomText1}>MISSION</Text>
              <Text style={styles.missionBottomText2}>COMPLETE!!</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('MissionHome')}>
              <Text style={styles.missionBottomText1}>MISSION</Text>
              <Text style={styles.missionBottomText2}>현재미션이름</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.section0}>
          <View style={styles.section0BtnContainer}>
            <TouchableOpacity
              //선혁님 페이지 동물도감
              onPress={() => navigation.navigate('Collection')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttons}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ListOfDiaries')}
              style={styles.buttonTouchable}>
              <Image
                style={styles.buttons}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
