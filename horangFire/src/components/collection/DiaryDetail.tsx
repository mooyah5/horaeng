import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
  },
  section1: {flex: 5},
  section2: {flex: 16, paddingHorizontal: 24},
  section3: {flex: 5, flexDirection: 'row', paddingHorizontal: 24},

  infoBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  textBox: {
    width: '100%',
    // paddingHorizontal: 40,
    // marginVertical: 40,
  },
  box: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
    marginVertical: 40,
  },
  title: {fontFamily: font.beeBold, fontSize: 32, alignSelf: 'center'},
  day: {
    fontFamily: font.beeBold,
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {fontFamily: font.beeBold, fontSize: 20, paddingHorizontal: 20},
  imgBox: {
    overflow: 'hidden',
    width: '90%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyArea: {flex: 2},
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'DiaryDetail'>;
  route: RouteProp<ParamListBase, 'DiaryDetail'>;
}

const DiaryDetail = ({navigation, route}: Props) => {
  const onBackButton = () => {
    navigation.goBack();
    navigation.navigate('ListOfDiaries');
  };

  const days = route.params.day;
  const calc = route.params.info.createDate.substr(0, 10).split('-');
  const imgUrl = route.params.info.imgUrl;
  const txt = route.params.info.content;
  console.log(imgUrl);
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/longPostBox.png')}
          style={styles.infoBox}
        />
        <View style={styles.box}>
          <Text style={styles.title}>{days}일차</Text>
          <Text style={styles.day}>
            {calc[0]}년 {calc[1]}월 {calc[2]}일
          </Text>
          {imgUrl !== '' && (
            <View style={styles.imgBox}>
              <Image source={{uri: imgUrl}} style={styles.image} />
            </View>
          )}
          <ScrollView style={styles.textBox}>
            <Text style={styles.text}>{txt}</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="이전으로" clickEvent={onBackButton} />
      </View>
    </SafeAreaView>
  );
};

export default DiaryDetail;
