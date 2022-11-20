import React, {useState, useEffect} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import {reset} from '../../store/mission';
import {RNS3} from 'react-native-s3-upload';
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
import {selectCharacter, selectName} from '../../store/character';
import api from '../../api/api_controller';
import {selectFile} from '../../store/mission';
import {charMission} from '../../script/charMission';
// import process from 'process';
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
    marginBottom: 8,
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
  const charInfo = useSelector(selectCharacter)?.userCharacter;
  // const imgUrl = useSelector(selectFile); // main 미션 이미지 url 저장

  const [clickHelp, setClickHelp] = useState(false); // 안내 사항 확인?
  const [mainId, setMainId] = useState(0);
  const mission = charMission[charInfo?.character_id][0];
  const [diary, setDiary] = useState('');
  const sampleImg = charMission[charInfo?.character_id][1];
  const info =
    '1. 예시 사진과 동일하게 종이를 아끼는 모습을 담은 사진을 찍어주세요. \n 2. 부적합한 사진 업로드시 포인트가 차감될 수 있습니다.';
  const [point, setPoint] = useState(0); // 포인트 적립 내역
  const image = useSelector(selectFile); // 이미지 정보
  const [loca, setLoca] = useState('');

  // s3 server 연결

  const submit = async () => {
    try {
      await api.diary.submit({
        content: diary,
        imgUrl: loca,
        userId: charInfo?.user_id, // user id
        userCharacterId: charInfo?.id, // 캐릭터 id
        charactersId: charInfo?.character_id, // 동물 타입
        characterMissionId: mainId, // 수정 예정
        addPoint: point, // 포인트
        isMain: 1,
      });
      dispatch(reset());
      navigation.navigate('SubmitMission', {
        type: 'main',
        point: point,
      });
    } catch (err) {
      Alert.alert('작성 실패ㅜㅠ');
    }
  };

  const checkImage = () => {
    if (diary !== '') {
      // s3 서버 연결
      RNS3.put(
        {
          uri: image.file,
          name: image.name,
          type: image.type,
        },
        {
          bucket: 'k7c108',
          region: 'ap-northeast-2',
          accessKey: 'AKIAWHLOLOLJ3T3C7JUE',
          secretKey: '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',
          successActionStatus: 201,
        },
      ).then((res: any) => {
        if (res.status === 201) {
          setLoca(res.body.postResponse.location);
        } else {
          Alert.alert('업로드 실패');
        }
      });
    } else {
      Alert.alert('성냥팔이 호랭이', '글을 작성해주세요!', [{text: '닫기'}]);
    }
  };
  useEffect(() => {
    if (loca !== '') {
      submit();
    }
  }, [loca]);

  const goBack = () => {
    dispatch(reset());
    navigation.goBack();
  };

  useEffect(() => {
    const getMain = async () => {
      const res = await api.diary.getMainId(charInfo?.id);
      setMainId(res.characterMissionId);
    };
    getMain();
    const random = Math.floor(Math.random() * 10) + 1;
    setPoint(random); // 1~10까지의 랜덤 포인트 지급
  }, []);

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
          {clickHelp && <HelpTxt imgUrl={sampleImg} info={info} />}
        </View>

        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={goBack} />
          <Btn txt="제출하기" clickEvent={checkImage} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainMission;
