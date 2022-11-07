import React, {useState} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import {reset} from '../../store/mission';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Btn from '../../components/common/Btn_short';
import MissionTxt from '../../components/mission/MissionTxt';
import HelpTxt from '../../components/mission/HelpTxt';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectName} from '../../store/character';
import api from '../../api/api_controller';
import {selectMainFile} from '../../store/mission';

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

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'MainMission'>;
}

const MainMission = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const imgUrl = useSelector(selectMainFile);

  const [clickHelp, setClickHelp] = useState(false);
  const mission = '종이 아끼기';
  const [diary, setDiary] = useState('');
  const info =
    '1. 예시 사진과 동일하게 종이를 아끼는 모습을 담은 사진을 찍어주세요. \n 2. 부적합한 사진 업로드시 포인트가 차감될 수 있습니다.';

  const submit = async () => {
    if (diary !== '') {
      // 제출 api 호출
      dispatch(reset());
      try {
        await api.diary.submitMain({
          content: diary,
          imgUrl: imgUrl,
          userId: 'test1', // user id
          userCharacter: 1, // 캐릭터 id
          charactersId: 1, // 동물 타입
        });
        navigation.navigate('SubmitMission');
      } catch (err) {
        Alert.alert('작성 실패ㅜㅠ');
      }
    } else {
      Alert.alert('성냥팔이 호랭이', '글을 작성해주세요!', [{text: '닫기'}]);
    }
  };

  const goBack = () => {
    dispatch(reset());
    navigation.goBack();
  };

  // useEffect(() => {}, [diary]);

  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TitleText title={name} subTitle="메인 미션 수행하기" />
        </View>

        <View style={styles.cont2}>
          <Image
            style={styles.box}
            source={require('../../assets/image/box_large.png')}
          />
          {/* 물음표 버튼 */}
          <View style={styles.help}>
            <TouchableOpacity
              style={styles.helpBtn}
              onPress={() => setClickHelp(!clickHelp)}>
              <Text>{clickHelp ? 'X' : '?'}</Text>
            </TouchableOpacity>
          </View>

          {/* 안에 들어갈 텍스트 내용 */}
          {!clickHelp && (
            <MissionTxt
              mission={mission}
              setDiary={setDiary}
              navigation={navigation}
            />
          )}
          {clickHelp && <HelpTxt mission={mission} info={info} />}
        </View>

        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={goBack} />
          <Btn txt="제출하기" clickEvent={submit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainMission;
