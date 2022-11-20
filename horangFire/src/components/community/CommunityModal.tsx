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
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {font, color} from '../../styles/colorAndFontTheme';

export interface valueType {
  id: number;
  name: string;
}

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
  subTitle: {
    fontFamily: font.beeMid,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: color.BLACK_3A,
  },
  title: {
    fontFamily: font.beeBold,
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    color: color.BLACK_3A,
  },
  day: {
    fontFamily: font.beeMid,
    fontSize: 24,
    paddingTop: 5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  text: {
    fontFamily: font.beeMid,
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: color.BLACK_3A,
  },
  imgBox: {
    // backgroundColor: color.BACK_SUB,
    width: '100%',
    height: '80%',
    borderRadius: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  report: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  emptyArea: {flex: 2},
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
  navigation: StackNavigationProp<ParamListBase, 'Community'>;
  id: number;
  route: any;
}

const DiaryDetail = ({navigation, route}: Props) => {
  const {id} = route.params;
  const {item} = route.params;

  const onBackButton = () => {
    navigation.goBack();
  };

  const data: any = {
    0: '전체',
    1: '뱅갈호랑이',
    2: '오목눈이',
    3: '아프리카 코끼리',
    4: '바다 거북이',
    5: '펭귄',
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/longPostBox.png')}
          style={styles.infoBox}
        />
        <Pressable style={styles.x_button} onPress={onBackButton}>
          <Image
            source={require('../../assets/image/xButton.png')}
            style={styles.imageBtn}
          />
        </Pressable>
        <ScrollView style={styles.textBox}>
          <Text style={styles.subTitle}>{item.name} 님의</Text>
          <Text style={styles.title}>{data[item.charactersId]}</Text>
          {item.imgUrl ? (
            <Image
              source={{
                uri: item.imgUrl,
              }}
              style={styles.image}
            />
          ) : (
            <Text />
          )}

          <Text style={styles.text}>{item.content}</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('ReportModal', {id: id})}>
            <Image
              source={require('../../assets/image/icon/reportIcon.png')}
              style={styles.report}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
      </View>
    </SafeAreaView>
  );
};

export default DiaryDetail;
