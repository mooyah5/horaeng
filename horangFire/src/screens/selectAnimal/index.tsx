import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color, font} from '../../styles/colorAndFontTheme';
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
    flex: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section5: {
    flex: 4,
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
  id: string;
  name: string;
  image: string;
  backImage: string;
  mission: string;
}
const animal: ANIMAL[] = [
  {
    id: '1',
    name: '벵갈호랑이',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '종이 아끼기',
  },
  {
    id: '2',
    name: '오목눈이',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '마스크 올바르게 버리기',
  },
  {
    id: '3',
    name: '아프리카 코끼리',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '화석연료사용줄이기',
  },
  {
    id: '4',
    name: '바다 거북이',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '플라스틱줄이기',
  },
  {
    id: '5',
    name: '펭귄',
    image: require('../../assets/image/character/tiger.png'),
    backImage: require('../../assets/image/mainbottom.png'),
    mission: '전기아끼기',
  },
];

const SelectAnimal = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View style={styles.section1}></View>
      <View style={styles.section2}>
        <Text style={styles.text1}>어떤동물과함께할까?</Text>
        <Text style={styles.text2}>21일동안 함께 할 동물을 골라봐!</Text>
      </View>
      <View style={styles.section3}></View>
      <View style={styles.section4}>
        <Text style={styles.text3}>동물이름</Text>
        <Image
          style={styles.charcterImage}
          source={require('../../assets/image/character/tiger.png')}
        />
      </View>
      <View style={styles.section5}>
        <Image
          style={styles.missionBox}
          source={require('../../assets/image/mainbottom.png')}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AnimalNameForm')}>
            <Text style={styles.text3}>MISSION</Text>
            <Text style={styles.text3}>종이아끼기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section6}></View>
    </SafeAreaView>
  );
};

export default SelectAnimal;
