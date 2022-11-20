import React, {useEffect, useState} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Btn from '../../components/common/Btn_long';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCharacter, selectName} from '../../store/character';
import {charMission} from '../../script/charMission';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.BACK_SUB,
    paddingBottom: 60,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    overflow: 'visible',
  },
  cont1: {
    flex: 1.5,
  },
  cont2: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    flex: 1.5,
    flexDirection: 'row',
  },
  btn: {
    paddingHorizontal: 6,
  },
  txtTitle: {
    fontFamily: font.beeBold,
    fontSize: 32,
    // paddingTop: 40,
    paddingBottom: 20,
  },
  txtSub: {
    fontFamily: font.beeBold,
    fontSize: 26,
    textAlign: 'center',
  },
  box: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'LookCommon'>;
  route: RouteProp<ParamListBase, 'SubmitMission'>;
}

const SubmitMission = ({navigation, route}: Props) => {
  const charInfo = useSelector(selectCharacter);
  const days = charInfo?.count;
  const name = useSelector(selectName);
  const [success, setSuccess] = useState('');
  // const [point, setPoint] = useState(route.params.point;
  const point = route?.params?.point;

  useEffect(() => {
    console.log(route?.params?.type);
    if (route?.params?.type === 'main') {
      setSuccess(days + '일차 미션을 해결했네!');
    } else {
      setSuccess('공통미션을 마쳤네!');
    }
  }, []);

  // ====== animation ========

  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TitleText
            title={name}
            subTitle={
              route.params.type === 'main'
                ? '메인 미션 수행 완료'
                : '공통 미션 수행 완료'
            }
          />
        </View>
        <View style={styles.cont2}>
          <Image
            style={styles.box}
            source={require('../../assets/image/optionBox.png')}
          />
          <Text style={styles.txtTitle}>
            {charMission[charInfo?.userCharacter?.character_id]} 미션
          </Text>
          <Text style={styles.txtSub}>{success}</Text>
          <Text style={styles.txtSub}>
            <Text style={{color: color.RED}}>{point}</Text>개의 성냥을 선물로
            줄게 :)
          </Text>
        </View>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Btn
              txt="메인 화면으로"
              clickEvent={() => navigation.navigate('Home')}
            />
          </View>
          <View style={styles.btn}>
            <Btn
              txt="미션 메인으로"
              clickEvent={() => navigation.navigate('MissionHome')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SubmitMission;
