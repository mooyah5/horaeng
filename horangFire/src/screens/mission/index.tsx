import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import Btn from '../../components/common/Btn_long';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {checkTodaysMission} from '../../store/character';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.BACK_SUB,
    paddingBottom: 60,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont1: {
    flex: 2,
  },
  cont2: {
    alignItems: 'center',
    marginTop: 30,
    flex: 6,
  },
  txtBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    paddingHorizontal: 6,
  },
  txt: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BLACK_3A,
    position: 'absolute',
    paddingBottom: 30,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'MissionHome'>;
}

const MissionHome = ({navigation}: Props) => {
  const isDone: boolean = useSelector(checkTodaysMission);

  const missionTxt = '종이를 아끼기';
  const [charSays, setCharSays] = useState<string>('나를 위해 ' + missionTxt);
  const canDoMain = () => {
    if (!isDone) {
      navigation.navigate('MainMission');
    } else {
      setCharSays('이미 메인 미션을 완료했어!');
    }
  };

  const canDoCommon = () => {
    if (isDone) {
      navigation.navigate('LookCommon');
    } else {
      setCharSays('메인 미션 먼저 해결해줘!');
    }
  };

  useEffect(() => {
    console.log('aa');
  }, [charSays]);

  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TitleText title="호랭이 이름" subTitle="미션 수행하기" />
        </View>

        <View style={styles.cont2}>
          <View style={styles.txtBox}>
            <Image
              source={require('../../assets/image/textBox.png')}
              style={{marginBottom: 20}}
            />
            <Text style={styles.txt}>{charSays}</Text>
          </View>
          <Image
            source={require('../../assets/image/character/72ppi/tiger3.png')}
            style={{width: 228, height: 242}}
          />
        </View>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Btn txt="메인 미션 진행" clickEvent={canDoMain} />
          </View>
          <View style={styles.btn}>
            <Btn txt="공통 미션 진행" clickEvent={canDoCommon} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MissionHome;
