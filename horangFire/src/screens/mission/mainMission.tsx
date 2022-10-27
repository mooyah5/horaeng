import React, {useState} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Btn from '../../components/common/Btn_short';
import MissionTxt from '../../components/mission/MissionTxt';
import HelpTxt from '../../components/mission/HelpTxt';

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
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    position: 'absolute',
    width: 307,
    height: 430,
  },
  help: {
    fontFamily: font.beeBold,
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 50,
    paddingTop: 30,
  },
  helpBtn: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 100,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: color.WHITE_OPAC,
  },
});
const MainMission = ({navigation}: any) => {
  const [clickHelp, setClickHelp] = useState(false);
  const mission: string = '종이 아끼기';
  const [diary, setDiary] = useState('');
  const isMain = useState(true);
  const info =
    '1. 예시 사진과 동일하게 종이를 아끼는 모습을 담은 사진을 찍어주세요. \n 2. 부적합한 사진 업로드시 포인트가 차감될 수 있습니다.';

  const submit = () => {
    navigation.navigate('SubmitMission');
  };
  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TitleText title="호랭이 이름" subTitle="메인 미션 수행하기" />
        </View>

        <View style={styles.cont2}>
          <Image
            style={styles.box}
            source={require('../../assets/image/box_large.png')}
          />
          <TouchableOpacity
            style={styles.help}
            onPress={() => setClickHelp(!clickHelp)}>
            <View style={styles.helpBtn}>
              <Text>{clickHelp ? 'X' : '?'}</Text>
            </View>
          </TouchableOpacity>
          {!clickHelp && (
            <MissionTxt
              mission={mission}
              diary={diary}
              setDiary={setDiary}
              isMain={true}
            />
          )}
          {clickHelp && <HelpTxt mission={mission} info={info} />}
        </View>

        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
          <Btn txt="제출하기" clickEvent={submit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainMission;
