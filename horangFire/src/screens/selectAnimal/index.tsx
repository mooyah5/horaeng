import React , { useState, useRef }from 'react';
import {Button,StyleSheet, Text, View, SafeAreaView, Image, FlatList, Animated} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import OnboardingItem from './OnboardingItem';

const styles = StyleSheet.create({
  backgroundColor: { 
    backgroundColor: '#FFD783',
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    borderWidth: 1,
  },
  text1: {
    fontFamily: font.beeBold,
    fontSize: 40,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  text2: {
    fontFamily: font.beeBold,
    fontSize: 23,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
  },
  characterContainer: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  characterImg: {
    width: '70%',
    height: '50%',
  },
  characterName: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BROWN_47,
    textAlign: 'center',
  },
});

const SelectAnimal = ({navigation}: any) => {
  interface ANIMAL {
    id: string,
    name: string,
    image: string,
    backImage: string,
    mission: string,
  }
  const animal: ANIMAL[] = [
    {
      id: '1',
      name: '벵갈호랑이',
      image: require('../../assets/image/character/tiger.png'),
      backImage: require('../../assets/image/mainbottom.png'),
      mission: '종이 아끼기'
    },
    {
      id: '2',
      name: '오목눈이',
      image: require('../../assets/image/character/tiger.png'),
      backImage: require('../../assets/image/mainbottom.png'),
      mission: '마스크 올바르게 버리기'
    },
    {
      id: '3',
      name: '아프리카 코끼리',
      image: require('../../assets/image/character/tiger.png'),
      backImage: require('../../assets/image/mainbottom.png'),
      mission: '화석연료사용줄이기'
    },
    {
      id: '4',
      name: '바다 거북이',
      image: require('../../assets/image/character/tiger.png'),
      backImage: require('../../assets/image/mainbottom.png'),
      mission: '플라스틱줄이기'
    },
    {
      id: '5',
      name: '펭귄',
      image: require('../../assets/image/character/tiger.png'),
      backImage: require('../../assets/image/mainbottom.png'),
      mission: '전기아끼기'
    }
  ]
  return (
    <View style={styles.backgroundColor}>
      <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.text1}>어떤동물과 함께할까?</Text>
            <Text style={styles.text2}>3주동안 함께 할 동물을 선택하자!</Text>
            {/* <Button title="Home" onPress={() => navigation.navigate('Home')} /> */}
            {/* 캐릭터이미지 */}
            <FlatList data={animal}
              renderItem={({ item }) => <OnboardingItem item={item} navigation={navigation} />}
              horizontal
              showsHorizontalScrollIndicator
              pagingEnabled />
          </View>
        </SafeAreaView>
    </View>
  );
};

export default SelectAnimal;
