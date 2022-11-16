import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import CommuDetailTitleText from '../../components/community/CommuDetailTitleText';
import Btn from '../../components/common/Btn_short';
import api from '../../api/api_controller';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

export interface valueType {
  id: number;
  name: string;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  textId: {
    fontFamily: font.preBold,
    fontSize: 30,
  },
  body: {
    backgroundColor: color.MODAL,
    width: '100%',
    height: '100%',
    padding: 40,
    paddingTop: 40,
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 3,
    paddingHorizontal: 20,
  },
  imageBox: {
    // flex: 1,
    borderRadius: 10,
    padding: 24,
    // width: '100%',
    // height: 250,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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

const CommunityDetail = ({navigation, route}: Props) => {
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

  return (
    <View>
      <View style={styles.body}>
        <View style={styles.box1}>
          <CommuDetailTitleText
            title={communityDetail.content}
            subTitle={communityDetail.userId}
          />
        </View>
        <View style={styles.box2}>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e6666d8fd08427c1f00d04db607cc4cdc8e',
              }}
            />
          </View>
          <ScrollView>
            <Text style={styles.text}>{communityDetail.content}</Text>
            <Text style={styles.textId}>{communityDetail.charactersId}</Text>
          </ScrollView>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
          <Btn
            txt="신고하기"
            clickEvent={() => navigation.navigate('ReportModal')}
          />
        </View>
      </View>
    </View>
  );
};

export default CommunityDetail;
