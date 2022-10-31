import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
    marginVertical: 40,
  },
  title: {fontFamily: font.beeBold, fontSize: 40, alignSelf: 'center'},
  day: {
    fontFamily: font.beeBold,
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center',
  },
  text: {fontFamily: font.beeBold, fontSize: 20, paddingHorizontal: 20},
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});

const DiaryDetail = ({navigation}: any) => {
  const onBackButton = () => {
    navigation.goBack();
    navigation.navigate('ListOfDiaries');
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1}></View>
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/longPostBox.png')}
          style={styles.infoBox}
        />
        <ScrollView style={styles.textBox}>
          <Text style={styles.title}>1일차</Text>
          <Text style={styles.day}>2022.10.20 (목)</Text>
          <Image
            source={require('../../assets/image/ex_horang.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            오늘은 에너지 절약에 관한 기사를 보았다. 기사를 보니 우리가
            아무렇지도 않게 쓰고 있는 에너지가 멸종 위기에 빠진 동물들을 더
            괴롭게 하고 있다는 사실을 알게 되었다. 나는 컴퓨터 전원도 하루
          </Text>
        </ScrollView>
      </View>
      <View style={styles.section3}>
        <View style={{flex: 2}} />
        <Btn txt="이전으로" clickEvent={onBackButton} />
      </View>
    </SafeAreaView>
  );
};

export default DiaryDetail;
