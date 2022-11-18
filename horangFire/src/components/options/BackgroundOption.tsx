import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../api/api_controller';
import {BACKGROUND} from '../../screens/Home';
import {saveDataInLocalStorage} from '../../store/AsyncService';
import {
  selectBackgroundNumber,
  setBackgroundNumber,
} from '../../store/background';
import {selectHaveBackground} from '../../store/haveBackground';
import {selectUser} from '../../store/user';
import {font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';

const styles = StyleSheet.create({
  // main area
  body: {backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%'},
  section1: {flex: 5},
  section2: {flex: 23, paddingHorizontal: 24, alignItems: 'center'},
  section3: {flex: 5},
  // option area
  subSection1: {flex: 5, justifyContent: 'center'},
  subSection2: {
    flex: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
  subSection3: {
    flex: 2,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subSection4: {flex: 2},
  // option
  optionBox: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
  title: {fontSize: 40, fontFamily: font.beeBold, textAlign: 'center'},
  // background
  leftArrowArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  background: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  rightArrowArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'BackgroundOption'>;
}

const BackgroundOption = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const backgroundNumber = useSelector(selectBackgroundNumber);
  const haveBackground = useSelector(selectHaveBackground);
  const user = useSelector(selectUser);
  const [selectedBackground, setSelectedBackground] =
    useState<number>(backgroundNumber);

  const handleRightButton = () => {
    setSelectedBackground(prev => (prev + 1) % 8);
  };

  const handleLeftButton = () => {
    setSelectedBackground(prev => (prev + 7) % 8);
  };

  const handleApplyButton = async () => {
    dispatch(setBackgroundNumber(selectedBackground));
    await saveDataInLocalStorage('background_number', selectedBackground);
    navigation.navigate('Home');
  };

  const handleBuyButton = () => {
    navigation.navigate('SelectModal', {
      selectedNumber: selectedBackground + 1,
    });
  };

  const applyButton = () => {
    if (haveBackground.includes(selectedBackground + 1)) {
      return <Btn txt={'적용하기'} clickEvent={handleApplyButton} />;
    } else if (user.point < 100) {
      return <Btn txt={'구매불가'} clickEvent={() => true} />;
    } else {
      return <Btn txt={'구매가능'} clickEvent={handleBuyButton} />;
    }
  };

  return (
    <>
      <View style={styles.body}>
        <View style={styles.section1} />
        <View style={styles.section2}>
          <Image
            source={require('../../assets/image/background_option.png')}
            style={styles.optionBox}
          />
          <View style={styles.subSection1}>
            <Text style={styles.title}>배경화면 설정</Text>
          </View>
          <View style={styles.subSection2}>
            <TouchableOpacity
              style={styles.leftArrowArea}
              onPress={handleLeftButton}>
              <Image source={require('../../assets/image/leftArrow.png')} />
            </TouchableOpacity>
            <Image
              style={styles.background}
              source={BACKGROUND[selectedBackground]}
            />
            <TouchableOpacity
              style={styles.rightArrowArea}
              onPress={handleRightButton}>
              <Image source={require('../../assets/image/rightArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.subSection3}>
            {applyButton()}
            <Btn txt={'닫기'} clickEvent={() => navigation.navigate('Home')} />
          </View>
          <View style={styles.subSection4} />
        </View>
        <View style={styles.section3} />
      </View>
    </>
  );
};

export default BackgroundOption;
