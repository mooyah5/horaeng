import {View, StyleSheet, Image, Text, Switch} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';
import {useState} from 'react';
import Slider from '@react-native-community/slider';

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
  optionSwitchName: {fontSize: 20, fontFamily: font.beeBold, paddingRight: 30},
  optionSwitch: {justifyContent: 'flex-start'},
});

const Option = ({navigation}: any) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };

  const clickButton = () => {
    navigation.navigate('Home');
  };

  const logout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.body}>
      <View style={styles.section1}></View>
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/optionBox.png')}
          style={styles.optionBox}
        />
        <View style={styles.subSection1}></View>
        <View style={styles.subSection2}>
          <Text style={styles.optionTitle}>환경설정</Text>
        </View>
        <View style={styles.subSection3}></View>
        <View style={styles.subSection4}>
          <Text style={styles.optionSliderName}>배경음</Text>
          <Slider
            style={styles.optionSlider}
            thumbTintColor={color.MAIN}
            minimumTrackTintColor={color.BROWN_47}
          />
        </View>
        <View style={styles.subSection5}>
          <Text style={styles.optionSliderName}>효과음</Text>
          <Slider
            style={styles.optionSlider}
            thumbTintColor={color.MAIN}
            minimumTrackTintColor={color.BROWN_47}
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
        <View style={styles.subSection7}></View>
      </View>
      <View style={styles.section3}>
        <Btn txt={'적용하기'} clickEvent={clickButton} />
        <Btn txt={'돌아가기'} clickEvent={clickButton} />
        <Btn txt={'로그아웃'} clickEvent={logout} />
      </View>
      <View style={styles.section4}></View>
    </View>
  );
};

export default Option;
