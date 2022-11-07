import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import api from '../../api/api_controller';
import {color, font} from '../../styles/colorAndFontTheme';
import OnboardingItem from './Onboarding';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: color.BACK_SUB,
    height: '100%',
  },
  section1: {
    flex: 1,
  },
  section2: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section3: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  section4: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section6: {
    flex: 1,
  },
  text1: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BLACK_3A,
  },
  text2: {
    fontFamily: font.beeBold,
    fontSize: 18,
    color: color.BLACK_3A,
  },
  text3: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BLACK_3A,
  },
  charcterImage: {
    width: '70%',
    height: '80%',
    resizeMode: 'contain',
  },
  missionBox: {
    position: 'absolute',
    width: '70%',
    height: '80%',
    resizeMode: 'contain',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'SelectAnimal'>;
}

interface ANIMAL {
  id: number;
  name: string;
  species: string;
  image: string;
  backImage: string;
  mission: string;
}
const animal: ANIMAL[] = [
  {
    id: 1,
    name: '벵갈호랑이',
    species: 'tiger',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '종이 아끼기',
  },
  {
    id: 2,
    name: '오목눈이',
    species: 'bird',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '마스크 올바르게 버리기',
  },
  {
    id: 3,
    name: '아프리카코끼리',
    species: 'elephant',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '화석연료 사용 줄이기',
  },
  {
    id: 4,
    name: '바다거북이',
    species: 'turtle',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '플라스틱 줄이기',
  },
  {
    id: 5,
    name: '펭귄',
    species: 'penguin',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '전기 아끼기',
  },
];

const SelectAnimal = ({navigation}: Props) => {
  const [characterList, setCharacterList] = useState<ANIMAL[]>([]);

  const getCharacterList = async () => {
    try {
      const response = await api.character.getCharacterList();
      setCharacterList(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 동물리스트 조회
  useEffect(() => {
    getCharacterList();
  }, []);

  useEffect(() => {
    console.log(characterList);
  }, [characterList]);

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Text style={styles.text1}>어떤동물과함께할까?</Text>
        <Text style={styles.text2}>21일동안 함께 할 동물을 골라봐!</Text>
      </View>
      <View style={styles.section3} />
      <View style={styles.section4}>
        <FlatList
          data={animal}
          renderItem={({item}) => (
            <OnboardingItem item={item} navigation={navigation} />
          )}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
        />
      </View>
      <View style={styles.section5} />
      <View style={styles.section6} />
    </SafeAreaView>
  );
};

export default SelectAnimal;
