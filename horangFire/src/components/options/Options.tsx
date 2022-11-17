import {View, StyleSheet, Image, Text, Switch} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';
import {useEffect, useState} from 'react';
import Slider from '@react-native-community/slider';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  getDataInLocalStorage,
  removeDataInLocalStorage,
  saveDataInLocalStorage,
} from '../../store/AsyncService';
import {sound} from '../../App';

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Option'>;
}

const Option = ({navigation}: Props) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [backgroundVolume, setBackgroundVolume] = useState<number>(1);
  const [effectVolume, setEffectVolume] = useState<number>(1);

  const [initialBgmVolume, setInitialVolume] = useState<number>(1);
  const [initialEfVolume, setInitialEfVolume] = useState<number>(1);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };

  const onClickCancelButton = () => {
    setBackgroundVolume(initialBgmVolume);
    setEffectVolume(initialEfVolume);
    navigation.navigate('Home');
  };

  const onClickApplyButton = () => {
    setLocalVolume(backgroundVolume);
    setLocalEfVolume(effectVolume);

    navigation.navigate('Home');
  };

  const logout = async () => {
    await removeDataInLocalStorage('id');
    await removeDataInLocalStorage('token');
    navigation.navigate('Login');
  };

  const initailSetting = async () => {
    const bgmVolume = await getDataInLocalStorage('bgmVolume');
    const efVolume = await getDataInLocalStorage('efVolume');

    if (typeof bgmVolume === 'number') {
      setBackgroundVolume(bgmVolume);
      setInitialVolume(bgmVolume);
    }

    if (typeof efVolume === 'number') {
      setEffectVolume(efVolume);
      setInitialEfVolume(efVolume);
    }
  };

  const setLocalVolume = async (volume: number) => {
    await saveDataInLocalStorage('bgmVolume', volume);
  };

  const setLocalEfVolume = async (volume: number) => {
    await saveDataInLocalStorage('efVolume', volume);
  };

  useEffect(() => {
    initailSetting();
  }, []);

  useEffect(() => {
    sound.setVolume(backgroundVolume);
  }, [backgroundVolume]);

  return (
    <View style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/optionBox.png')}
          style={styles.optionBox}
        />
        <View style={styles.subSection1} />
        <View style={styles.subSection2}>
          <Text style={styles.optionTitle}>환경설정</Text>
        </View>
        <View style={styles.subSection3} />
        <View style={styles.subSection4}>
          <Text style={styles.optionSliderName}>배경음</Text>
          <Slider
            style={styles.optionSlider}
            thumbTintColor={color.MAIN}
            minimumTrackTintColor={color.BROWN_47}
            minimumValue={0}
            maximumValue={1}
            value={backgroundVolume}
            onValueChange={setBackgroundVolume}
          />
        </View>
        <View style={styles.subSection5}>
          <Text style={styles.optionSliderName}>효과음</Text>
          <Slider
            style={styles.optionSlider}
            thumbTintColor={color.MAIN}
            minimumTrackTintColor={color.BROWN_47}
            minimumValue={0}
            maximumValue={1}
            value={effectVolume}
            onValueChange={setEffectVolume}
          />
        </View>
        <View style={styles.subSection6}>
          <Text style={styles.optionSwitchName}>Push 알림</Text>
          <Switch
            style={styles.optionSwitch}
            trackColor={{false: color.MODAL_SUB, true: color.BROWN_47}}
            thumbColor={color.MAIN}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.subSection7} />
      </View>
      <View style={styles.section3}>
        <Btn txt={'적용하기'} clickEvent={onClickApplyButton} />
        <Btn txt={'돌아가기'} clickEvent={onClickCancelButton} />
        <Btn txt={'로그아웃'} clickEvent={logout} />
      </View>
      <View style={styles.section4} />
    </View>
  );
};

const styles = StyleSheet.create({
  // main area
  body: {backgroundColor: color.BACK_SUB, width: '100%', height: '100%'},
  section1: {flex: 4},
  section2: {flex: 6, paddingHorizontal: 24},
  section3: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  section4: {flex: 4},

  optionBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  button: {position: 'absolute'},
  // option area
  subSection1: {flex: 3},
  subSection2: {flex: 4},
  subSection3: {flex: 2},
  subSection4: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 55,
    alignItems: 'center',
  },
  subSection5: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 55,
    alignItems: 'center',
  },
  subSection6: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 45,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subSection7: {flex: 3},
  // option
  optionTitle: {fontSize: 40, fontFamily: font.beeBold, textAlign: 'center'},
  optionSliderName: {
    flex: 4,
    fontSize: 20,
    fontFamily: font.beeBold,
    paddingRight: 40,
  },
  optionSlider: {flex: 13},
  optionSwitchName: {
    fontSize: 20,
    fontFamily: font.beeBold,
    marginRight: '18%',
  },
  optionSwitch: {justifyContent: 'flex-start'},
});

export default Option;
