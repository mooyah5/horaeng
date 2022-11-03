import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Btn from '../common/Btn_short';
import {color, font} from '../../styles/colorAndFontTheme';
const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  section1: {flex: 5},
  section2: {flex: 16, paddingHorizontal: 24, paddingTop: 40},
  section3: {flex: 4, flexDirection: 'row', paddingHorizontal: 24},

  scroll: {flex: 1, marginBottom: 60},

  subSection1: {flex: 1, height: '100%'},
  subSection2: {
    flex: 1,
    height: '100%',
    paddingTop: 50,
  },
  subSection3: {
    flex: 1,
    height: '100%',
  },

  infoBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  diaryBox: {
    width: '100%',
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 20,
  },
  emptyArea: {flex: 2},
  textContainer: {
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  textPoints1: {
    fontFamily: font.beeBold,
    fontSize: 50,
    color: color.BROWN_47,
  },
  textPoints2: {
    fontFamily: font.beeBold,
    fontSize: 27,
    color: color.BROWN_47,
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  scrollView: {
    width: '80%',
  },
  textPoints3: {
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
    alignSelf: 'center',
  },
  textPoints4: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BROWN_47,
    marginBottom: 20,
    marginTop: 20,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'ListOfDiaries'>;
}

const Points = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/box_large.png')}
          style={styles.infoBox}
        />
        {/* 성냥 */}
        <View style={styles.textContainer}>
          <Text style={styles.textPoints2}>성냥</Text>
          <Text style={styles.textPoints1}>38420</Text>
          <Text style={styles.textPoints2}>개</Text>
        </View>
        <View style={styles.scrollViewContainer}>
          <Text style={styles.textPoints4}>포인트지급내역</Text>
          <ScrollView style={styles.scrollView}>
            <View>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
              <Text style={styles.textPoints3}>포인트지급내역</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="창 닫기" clickEvent={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default Points;
