import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  section1: {flex: 5},
  section2: {flex: 16, paddingHorizontal: 24},
  section3: {flex: 4, flexDirection: 'row', paddingHorizontal: 24},

  infoBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  textBox: {
    width: '100%',
    paddingHorizontal: 40,
    alignItems: 'center',
    overflow: 'scroll',
  },
  title: {fontFamily: font.beeBold, fontSize: 40, paddingTop: 40},
  text: {fontFamily: font.beeBold, fontSize: 20, paddingHorizontal: 20},
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  emptyArea: {flex: 2},
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'InfoOfAnimal'>;
  route: any;
}

// TODO 멸종위기 동물 관련 정보 채우기
const animal = {
  1: {name: '벵갈호랑이', image: '', content: '임시용'},
  2: {name: '오목눈이', image: '', content: '채워줘'},
  3: {name: '아프리카코끼리', image: '', content: '해줘'},
  4: {name: '바다거북이', image: '', content: '빨리 채워줘'},
  5: {name: '펭귄', image: '', content: '찾아줘'},
};

const InfoOfAnimal = ({navigation, route}: Props) => {
  const {params} = route;
  const animalId: 1 | 2 | 3 | 4 | 5 = params.id;

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/box_large.png')}
          style={styles.infoBox}
        />
        <View style={styles.textBox}>
          <Text style={styles.title}>[{animal[animalId].name}]</Text>
          <Image
            source={require('../../assets/image/ex_horang.png')}
            style={styles.image}
          />
          <Text style={styles.text}>{animal[animalId].content}</Text>
        </View>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="창 닫기" clickEvent={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default InfoOfAnimal;
