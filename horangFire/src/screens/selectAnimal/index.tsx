import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: color.BACK_SUB,
    height: '100%',
  },
  section1: {
    flex: 2,
  },
  section2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionPlus: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section4: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
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
    paddingBottom: 10,
  },
  text4: {
    fontFamily: font.beeBold,
    fontSize: 35,
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
  image: {
    height: '85%',
    width: '100%',
    resizeMode: 'contain',
  },
  leftArrowArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  rightArrowArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  backImage: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  startBtn: {
    fontFamily: font.beeMid,
    fontSize: 30,
    color: color.BROWN_78,
  },
  startBtnImage: {
    height: '100%',
    resizeMode: 'contain',
  },
  ImageConatainer: {
    width: '95%',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'SelectAnimal'>;
}

interface ANIMAL {
  id: number;
  name: string;
  species: string;
  image: ImageSourcePropType;
  backImage: string;
  mission: string;
}
export const animal: ANIMAL[] = [
  {
    id: 1,
    name: '벵갈호랑이',
    species: 'tiger',
    image: require('../../assets/image/character/72ppi/tiger3.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '종이 아끼기',
  },
  {
    id: 2,
    name: '오목눈이',
    species: 'bird',
    image: require('../../assets/image/character/72ppi/bird3.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '마스크 올바르게 버리기',
  },
  {
    id: 3,
    name: '아프리카코끼리',
    species: 'elephant',
    image: require('../../assets/image/character/72ppi/elephant3.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '화석연료 사용 줄이기',
  },
  {
    id: 4,
    name: '바다거북이',
    species: 'turtle',
    image: require('../../assets/image/character/72ppi/turtle3.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '플라스틱 줄이기',
  },
  {
    id: 5,
    name: '펭귄',
    species: 'penguin',
    image: require('../../assets/image/character/72ppi/penguin3.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '전기 아끼기',
  },
];

const SelectAnimal = ({navigation}: Props) => {
  const [num, setNum] = useState<number>(0);

  const handleRightButton = () => {
    setNum(prev => (prev + 1) % 5);
  };

  const handleLeftButton = () => {
    setNum(prev => (prev + 4) % 5);
  };

  const setMissionFun = (id: number, name: string, species: string) => {
    navigation.navigate('AnimalNameForm', {
      selectedCharacterId: id,
      selectedCharacterName: name,
      selectedCharacterSpecies: species,
    });
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Text style={styles.text1}>어떤동물과함께할까?</Text>
        <Text style={styles.text2}>21일동안 함께 할 동물을 골라봐!</Text>
      </View>
      <View style={styles.section3} />
      <View style={styles.sectionPlus}>
        <Image
          style={styles.backImage}
          source={require('../../assets/image/textBox.png')}
        />
        <Text style={styles.text3}>나는 {animal[num].name}</Text>
      </View>
      <View style={styles.section4}>
        <TouchableOpacity
          style={styles.leftArrowArea}
          onPress={handleLeftButton}>
          <Image source={require('../../assets/image/leftArrow.png')} />
        </TouchableOpacity>
        <View style={styles.ImageConatainer}>
          <Image source={animal[num].image} style={styles.image} />
        </View>
        <TouchableOpacity
          style={styles.rightArrowArea}
          onPress={handleRightButton}>
          <Image source={require('../../assets/image/rightArrow.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.section5}>
        <TouchableOpacity
          onPress={() =>
            setMissionFun(animal[num].id, animal[num].name, animal[num].species)
          }>
          <Image
            source={require('../../assets/image/start.png')}
            style={styles.startBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.section6} />
    </SafeAreaView>
  );
};

export default SelectAnimal;
