import React from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import Btn from '../../components/common/Btn_short';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.BACK_SUB,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont1: {
    flex: 2,
  },
  cont2: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
  },
  btns: {
    width: '90%',
    alignItems: 'flex-end',
    flex: 1,
  },
  box: {
    position: 'absolute',
    width: 307,
    height: 430,
  },
  title: {
    fontFamily: font.beeBold,
    fontSize: 32,
    color: color.BLACK_3A,
    marginTop: 50,
    paddingBottom: 15,
    flex: 1,
  },
  text: {
    fontFamily: font.beeBold,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  txtBox: {
    position: 'absolute',
    width: 241,
    height: 93,
  },
  select: {
    flex: 5,
    width: '63%',
    marginTop: 20,
    marginLeft: 8,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  list: {
    fontFamily: font.beeBold,
    color: color.BROWN_47,
    fontSize: 30,
  },
  move: {
    backgroundColor: color.BROWN_47,
    color: color.WHITE,
    fontFamily: font.preBold,
    fontSize: 14,
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'LookCommon'>;
}

const LookCommon = ({navigation}: Props) => {
  const missionList = [
    '하나. 종이 아끼기',
    '두울. 종이 안아끼기',
    '세엣. 분리수거 하기',
  ];
  //   const numList = ['하나', '두울', '세엣'];
  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TitleText title="호랭이 이름" subTitle="공통 미션 수행하기" />
        </View>
        <View style={styles.cont2}>
          <Image
            style={styles.box}
            source={require('../../assets/image/box_large.png')}
          />
          <Text style={styles.title}>오늘의 공통 미션 둘러보기</Text>
          <View style={styles.info}>
            <Image
              style={styles.txtBox}
              source={require('../../assets/image/textBoxBottom.png')}
            />
            <Text style={styles.text}>
              기본 미션을 완료했더라도 {'\n'} 공통미션에 참여하면{' '}
              <Text style={{color: color.RED}}>성냥</Text>을 얻을 수 있어!
            </Text>
          </View>
          <View style={styles.select}>
            {/* {numList.length && numList.map(num => <Text>{num}</Text>)} */}
            {missionList.length &&
              missionList.map((name, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.btn}
                  onPress={() => navigation.navigate('MissionHome')}>
                  <Text style={styles.list}>{name}</Text>
                  <Text style={styles.move}>Go</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LookCommon;
