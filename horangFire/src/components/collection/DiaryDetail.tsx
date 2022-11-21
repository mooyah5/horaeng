import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
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
  section2: {flex: 15, paddingHorizontal: 24},
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
    height: '100%',
    paddingHorizontal: 40,
    marginVertical: 40,
  },
  title: {fontFamily: font.beeMid, fontSize: 26, alignSelf: 'center'},
  day: {
    fontFamily: font.beeMid,
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {fontFamily: font.beeMid, fontSize: 16, paddingHorizontal: 20},
  imgBox: {
    overflow: 'hidden',
    width: '100%',
    height: 200,
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
    resizeMode: 'contain',
  },

  x_button: {
    position: 'absolute',
    top: 10,
    right: 40,
    width: 30,
    height: 30,
  },
  imageBtn: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
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
  console.log(diary.imgUrl);

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
            {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}.
            {week[date.getDay()]}요일
          </Text>
          {/* TODO S3 완료된 이후에 이미지 경로 추가 */}
          {diary.imgUrl !== '' && (
            <View style={styles.imgBox}>
              <Image source={{uri: diary.imgUrl}} style={styles.image} />
            </View>
          )}

          <Text style={styles.text}>{diary.content}</Text>
        </ScrollView>
        <Pressable style={styles.x_button} onPress={onBackButton}>
          <Image
            source={require('../../assets/image/xButton.png')}
            style={styles.imageBtn}
          />
        </Pressable>
      </View>
      <View style={styles.section3} />

      {/* <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="이전으로" clickEvent={onBackButton} />
      </View> */}
    </SafeAreaView>
  );
};

export default DiaryDetail;
