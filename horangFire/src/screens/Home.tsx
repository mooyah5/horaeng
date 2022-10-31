import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {color, font} from '../styles/colorAndFontTheme';
import TitleText from '../components/common/TitleText';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 24,
    paddingTop: 40,
  },
  text: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  iconContainer1: {
    marginTop: 30,
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 24,
    width: '100%',
  },
  iconContainer2: {
    position: 'absolute',
    marginLeft: 24,
    marginTop: 60,
    width: '100%',
  },
  iconContainer3: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    marginLeft: 24,
    width: '100%',
  },
  fuseIconContainer: {
    width: '50%',
  },
  bottomIconContainer: {
    width: '50%',
  },
  fuseIcon: {
    width: 30,
    height: 30,
  },
  leftIconsContainer: {
    width: '50%',
    flexDirection: 'row-reverse',
  },
  rightIconsContainer: {
    flexDirection: 'row-reverse',
    marginTop: 16,
  },
  settingIcon: {
    width: 30,
    height: 30,
  },
  backgroundIcon: {
    width: 30,
    height: 30,
  },
  communityIcon: {
    width: 30,
    height: 30,
  },
  journalIcon: {
    width: 30,
    height: 30,
  },
  collectionIcon: {
    width: 30,
    height: 30,
    right: 0,
    position: 'absolute',
  },
  characterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -130,
  },
  character: {
    ...Platform.select({
      ios: {
        width: '70%',
        height: '70%',
      },
      android: {
        top: 15,
        width: '65%',
        height: '65%',
      },
    }),
  },
  textContainer: {
    position: 'absolute',
    top: 120,
    width: '100%',
    height: '50%',
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterText1: {
    fontFamily: font.beeBold,
    fontSize: 25,
    color: color.BLACK_3A,
    textAlign: 'center',
    position: 'relative',
    top: -110,
  },
  characterText2: {
    fontFamily: font.beeBold,
    fontSize: 25,
    color: color.BLACK_3A,
    textAlign: 'center',
    position: 'relative',
    top: -100,
  },
  missionContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginLeft: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  missionImage: {
    ...Platform.select({
      ios: {
        width: '70%',
        height: 100,
      },
      android: {
        width: '70%',
        height: 90,
      },
    }),
    resizeMode: 'contain',
  },
  missionText1: {
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    position: 'absolute',
    ...Platform.select({
      ios: {
        fontSize: 35,
        bottom: 40,
        left: -50,
      },
      android: {
        left: -50,
        fontSize: 30,
        bottom: 40,
      },
    }),
  },
  missionText2: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BLACK_3A,
    position: 'absolute',
    ...Platform.select({
      ios: {
        fontSize: 35,
        bottom: 7,
        left: -50,
      },
      android: {
        left: -50,
        fontSize: 30,
        bottom: 10,
      },
    }),
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Login'>;
}

const Home = ({navigation}: Props) => {
  return (
    <ImageBackground
      source={require('../assets/image/background1.png')}
      style={styles.backgroundImage}>
      <SafeAreaView>
        <View style={styles.container}>
          {/* 동물 정보 - 공통 컴포넌트*/}
          <TitleText title={'n일차 호랑이'} subTitle={'내호랭이 쵝오'} />
          {/* 동물 상단 대사 */}
          <View style={styles.textContainer}>
            <Image source={require('../assets/image/b.png')} />
            <Text style={styles.characterText1}>
              종이를 아끼는 가장 좋은 방법은
            </Text>
            <Text style={styles.characterText2}>이면지를 사용하는 거당!</Text>
          </View>
          {/* 동물 이미지 */}
          <View style={styles.characterContainer}>
            <Image
              style={styles.character}
              source={require('../assets/image/character/tiger.png')}
            />
          </View>
          {/* 동물 하단 미션 */}
          <View style={styles.missionContainer}>
            <Image
              style={styles.missionImage}
              source={require('../assets/image/mainbottom.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('MissionHome')}>
              <Text style={styles.missionText1}>MISSION</Text>
              <Text style={styles.missionText2}>종이 아끼기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer1}>
            <TouchableOpacity style={styles.fuseIconContainer}>
              <Image
                style={styles.fuseIcon}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftIconsContainer}>
              <Image
                style={styles.settingIcon}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer2}>
            <TouchableOpacity style={styles.rightIconsContainer}>
              <Image
                style={styles.backgroundIcon}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightIconsContainer}>
              <Image
                style={styles.communityIcon}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer3}>
            <TouchableOpacity style={styles.bottomIconContainer}>
              <Image
                style={styles.journalIcon}
                source={require('../assets/image/setting.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomIconContainer}>
              <Image
                style={styles.collectionIcon}
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
