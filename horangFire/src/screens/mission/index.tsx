import React from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';
import Btn from '../../components/common/Btn_short';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.BACK_SUB,
    paddingBottom: 80,
    paddingHorizontal: 24,
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
  },
});
const MissonHome = ({navigation}: any) => {
  const click = () => {
    console.log('ss');
  };
  return (
    <SafeAreaView style={{backgroundColor: color.BACK_SUB}}>
      <View style={styles.container}>
        <TitleText title="위에 작성" subTitle="아래에 작성하세요" />
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={click} />
          <Btn txt="다음으로" clickEvent={click} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MissonHome;
