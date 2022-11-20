import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import Btn from '../../components/common/Btn_long';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  selectCharacter,
  selectName,
  selectTodaysCommonMission,
  selectTodaysMission,
} from '../../store/character';
import {charMission} from '../../script/charMission';
import {CHARACTER} from '../Home';

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
  back: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: -20,
  },
  cont1: {
    flex: 2,
    flexDirection: 'column',
  },
  cont2: {
    alignItems: 'center',
    marginTop: 30,
    flex: 1.5,
  },
  cont3: {
    flex: 4.5,
    width: '100%',
  },
  txtBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    paddingHorizontal: 6,
  },
  txt: {
    fontFamily: font.beeMid,
    fontSize: 20,
    color: color.BLACK_3A,
    position: 'absolute',
    paddingBottom: 30,
  },
  arrowBtn: {
    width: 30,
    height: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'MissionHome'>;
}

const MissionHome = ({navigation}: Props) => {
  const isMainDone = useSelector(selectTodaysMission);
  const isCommonDone = useSelector(selectTodaysCommonMission);
  const name = useSelector(selectName);
  const missionType = useSelector(selectCharacter)?.userCharacter?.character_id;
  const [characterNum, setCharacterNum] = useState<number>(0);
  const [specieName, setSpecieName] = useState<string>('');
  const missionTxt = charMission[missionType][0];
  const [charSays, setCharSays] = useState<string>(missionTxt + '에 도전 ~');
  const characterLv =
    useSelector(selectCharacter)?.userCharacter?.characterLevel;

  useEffect(() => {
    const characterName = () => {
      let name = '';
      switch (missionType) {
        case 1:
          name = 'tiger';
          break;
        case 2:
          name = 'bird';
          break;
        case 3:
          name = 'elephant';
          break;
        case 4:
          name = 'turtle';
          break;
        case 5:
          name = 'penguin';
          break;
      }

      return name;
    };
    setSpecieName(characterName());
  }, []);

  useEffect(() => {
    if (specieName === 'tiger' && characterLv === 'LEVEL_1') {
      setCharacterNum(0);
    }
    if (specieName === 'tiger' && characterLv === 'LEVEL_2') {
      setCharacterNum(1);
    }
    if (specieName === 'tiger' && characterLv === 'LEVEL_3') {
      setCharacterNum(2);
    }
    if (specieName === 'bird' && characterLv === 'LEVEL_1') {
      setCharacterNum(3);
    }
    if (specieName === 'bird' && characterLv === 'LEVEL_2') {
      setCharacterNum(4);
    }
    if (specieName === 'bird' && characterLv === 'LEVEL_3') {
      setCharacterNum(5);
    }
    if (specieName === 'elephant' && characterLv === 'LEVEL_1') {
      setCharacterNum(6);
    }
    if (specieName === 'elephant' && characterLv === 'LEVEL_2') {
      setCharacterNum(7);
    }
    if (specieName === 'elephant' && characterLv === 'LEVEL_3') {
      setCharacterNum(8);
    }
    if (specieName === 'turtle' && characterLv === 'LEVEL_1') {
      setCharacterNum(9);
    }
    if (specieName === 'turtle' && characterLv === 'LEVEL_2') {
      setCharacterNum(10);
    }
    if (specieName === 'turtle' && characterLv === 'LEVEL_3') {
      setCharacterNum(11);
    }
    if (specieName === 'penguin' && characterLv === 'LEVEL_1') {
      setCharacterNum(12);
    }
    if (specieName === 'penguin' && characterLv === 'LEVEL_2') {
      setCharacterNum(13);
    }
    if (specieName === 'penguin' && characterLv === 'LEVEL_3') {
      setCharacterNum(14);
    }
  }, [specieName, characterLv, characterNum]);

  const canDoMain = () => {
    if (isMainDone !== false) {
      navigation.navigate('MainMission');
    } else {
      setCharSays('이미 메인 미션을 완료했어 !');
    }
  };

  const canDoCommon = () => {
    if (isCommonDone === false && isMainDone === false) {
      setCharSays('메인 미션 먼저 해결해줘 !');
    } else if (isCommonDone === true && isMainDone === true) {
      setCharSays('모든 미션을 해결했어 !\n내일 다시 시도해줘 !');
      navigation.navigate('LookCommon');
    } else if (isMainDone === true && isCommonDone === false) {
      navigation.navigate('LookCommon');
    }
  };

  useEffect(() => {}, [charSays]);

  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}>
          {/* <View style={styles.arrow}> */}
          <Image
            style={styles.arrowBtn}
            source={require('../../assets/image/icon/left_arrow.png')}
          />
          {/* </View> */}
        </TouchableOpacity>
        <View style={styles.cont1}>
          <TitleText title={name} subTitle="미션 수행하기" />
        </View>

        <View style={styles.cont2}>
          <View style={styles.txtBox}>
            <Image
              source={require('../../assets/image/textBox.png')}
              style={{marginBottom: 10}}
            />
            <Text style={styles.txt}>{charSays}</Text>
          </View>
        </View>
        <View style={styles.cont3}>
          <Image source={CHARACTER[characterNum]} style={styles.img} />
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
