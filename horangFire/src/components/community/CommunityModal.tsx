import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';
import api from '../../api/api_controller';
import reportIcon from '../../assets/image/icon/reportIcon.png';

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
  title: {
    fontFamily: font.beeBold,
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },
  day: {
    fontFamily: font.beeBold,
    fontSize: 24,
    paddingTop: 5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  text: {
    fontFamily: font.beeBold,
    fontSize: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    minHeight: 100,
    resizeMode: 'contain',
    marginVertical: 20,
    borderRadius: 20,
    // paddingVertical: 20,
  },
  report: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  emptyArea: {flex: 2},
});

interface CommunityDetail {
  id: number;
  charactersId: number;
  userId: string;
  userCharacterId: number;
  content: string;
  imgUrl: string;
  createDate: string;
}

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Community'>;
  id: number;
  route: any;
}

const DiaryDetail = ({navigation, route}: Props) => {
  const {id} = route.params;

  const [communityDetail, setCommunityDetail] = useState<CommunityDetail>([]);

  const getCommunityDetail = async () => {
    try {
      const response = await api.community.getCommunityDetail(id);
      setCommunityDetail(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCommunityDetail();
  }, []);

  useEffect(() => {
    console.log('communityDetail', communityDetail);
  }, [communityDetail]);

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
        <ScrollView style={styles.textBox}>
          <Text style={styles.title}>
            {communityDetail.userId} 님의 {data[communityDetail.charactersId]}
          </Text>
          {/* <Text style={styles.day}>
            {communityDetail.createDate.substr(0, 10)}일자 미션수행결과
          </Text> */}
          <Image
            source={require('../../assets/image/temp.png')}
            style={styles.image}
          />
          <Text style={styles.text}>{communityDetail.content}</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('ReportModal', {id: id})}>
            <Image source={reportIcon} style={styles.report} />
          </TouchableOpacity>
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
