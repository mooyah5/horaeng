import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_long';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#FFD783',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontFamily: font.beeBold,
    fontSize: 40,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  btns: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  }
})

const AnimalNameConfirm = ({navigation}: any) => {
  return (
    <View style={styles.backgroundColor}>
      <SafeAreaView>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>동물이름(이)와</Text>
          <Text style={styles.text1}>미션을 시작해 볼까?</Text>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" 
            clickEvent={() => navigation.goBack()} />
          <Btn txt="다음으로" 
            clickEvent={() => navigation.navigate('MissonIntro')} />
        </View>
      </SafeAreaView>
    </View>
  )
};

export default AnimalNameConfirm