import {ParamListBase} from '@react-navigation/native';
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
import {Community} from '../community/CommunityContent';

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
  route: any;
}

const week = ['일', '월', '화', '수', '목', '금', '토'];

const DiaryDetail = ({navigation, route}: Props) => {
  const {params} = route;
  const diary: Community = params.info;
  const day: number = params.day;

  const date = new Date(diary.createDate);

  const onBackButton = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/longPostBox.png')}
          style={styles.infoBox}
        />
        <ScrollView style={styles.textBox}>
          <Text style={styles.title}>{day}일차</Text>
          <Text style={styles.day}>
            {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()} (
            {week[date.getDay()]})
          </Text>
          {/* TODO S3 완료된 이후에 이미지 경로 추가 */}
          {diary.imgUrl !== '' && (
            <Image source={{uri: diary.imgUrl}} style={styles.image} />
          )}

          <Text style={styles.text}>{diary.content}</Text>
        </ScrollView>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="이전으로" clickEvent={onBackButton} />
      </View>
    </SafeAreaView>
  );
};

export default DiaryDetail;
