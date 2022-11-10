import React, {useEffect, useState} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
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
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCharacter, selectName} from '../../store/character';
import api from '../../api/api_controller';
import {reset, selectFile} from '../../store/mission';

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
  navigation: StackNavigationProp<ParamListBase, 'CommonMission'>;
  route: RouteProp<ParamListBase, 'CommonMission'>;
}

const CommonMission = ({navigation, route}: Props) => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const charInfo = useSelector(selectCharacter)?.userCharacter;
  const imgUrl = useSelector(selectFile); // file img
  const [clickHelp, setClickHelp] = useState(false);
  const [diary, setDiary] = useState('');
  // 제출 함수
  const submit = async () => {
    if (diary !== '') {
      try {
        await api.diary.submit({
          content: diary,
          imgUrl: imgUrl,
          userId: charInfo?.user_id,
          userCharacterId: charInfo?.id,
          charactersId: charInfo?.character_id,
          characterMissionId: route.params.id,
        });
        dispatch(reset());
        navigation.navigate('SubmitMission', {
          type: 'common',
          text: '공통 미션을 성공적으로 마쳤네! \n 고마워 :)',
        });
      } catch (err) {
        Alert.alert('작성 실패ㅜㅠ');
      }
    } else {
      Alert.alert('성냥팔이 호랭이', '글과 사진을 모두 입력해주세요!', [
        {text: '닫기'},
      ]);
    }
  };
  const goBack = () => {
    dispatch(reset());
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TitleText title={name} subTitle="공통 미션 수행하기" />
        </View>

        <View style={styles.cont2}>
          <Image
            style={styles.box}
            source={require('../../assets/image/box_large.png')}
          />
          <View style={styles.help}>
            <TouchableOpacity
              style={styles.helpBtn}
              onPress={() => setClickHelp(!clickHelp)}>
              <Text>{clickHelp ? 'X' : '?'}</Text>
            </TouchableOpacity>
          </View>
          {!clickHelp && (
            <MissionTxt
              mission={route.params.title}
              setDiary={setDiary}
              navigation={navigation}
            />
          )}
          {clickHelp && (
            <HelpTxt imgUrl={route.params.imgUrl} info={route.params.content} />
          )}
        </View>

        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={goBack} />
          <Btn txt="제출하기" clickEvent={submit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommonMission;
