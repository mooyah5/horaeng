import React from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Btn from '../../components/common/Btn_long';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

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
    flex: 2,
    alignItems: 'center',
  },
  btns: {
    flex: 2,
    flexDirection: 'row',
  },
  txtTitle: {
    fontFamily: font.beeBold,
    fontSize: 32,
    paddingTop: 40,
    paddingBottom: 20,
  },
  txtSub: {
    fontFamily: font.beeBold,
    fontSize: 26,
    textAlign: 'center',
  },
  box: {
    position: 'absolute',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'LookCommon'>;
}

const SubmitMission = ({navigation}: Props) => {
  const mission = '종이 아끼기';
  const days = 1;
  const success = '일차 미션을 성공적으로 마쳤네! \n 고마워!! :)';
  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TitleText title="호랭이 이름" subTitle="기본 미션 수행 완료!" />
        </View>
        <View style={styles.cont2}>
          <Image
            style={styles.box}
            source={require('../../assets/image/optionBox.png')}
          />
          <Text style={styles.txtTitle}>'{mission}' 미션</Text>
          <Text style={styles.txtSub}>
            {days}
            {success}
          </Text>
        </View>
        <View style={styles.btns}>
          <Btn
            txt="메인 화면으로"
            clickEvent={() => navigation.navigate('MissionHome')}
          />
          <Btn
            txt="작성 일지 보기"
            clickEvent={() => navigation.navigate('MissionHome')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SubmitMission;
