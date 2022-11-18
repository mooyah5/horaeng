import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import CommuDetailTitleText from '../../components/community/CommuDetailTitleText';
import Btn from '../../components/common/Btn_short';
import api from '../../api/api_controller';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const styles = StyleSheet.create({
  text: {
    fontFamily: font.beeBold,
    fontSize: 28,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  body: {
    backgroundColor: color.MODAL,
    width: '100%',
    height: '100%',
    padding: 40,
    paddingTop: 40,
  },
  box1: {
    flex: 3,
  },
  box2: {
    flex: 3,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  btns: {
    flex: 1,
    alignSelf: 'flex-start',
  },
});

export interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Notice'>;
  route?: any;
}

interface NoticeDetail {
  id: number;
  userId: string;
  title: string;
  content: string;
  createDate: string;
}

const NoticeDetail = ({navigation, route}: Props) => {
  const {id} = route.params;
  const [noticeDetail, setNoticeDetail] = useState<NoticeDetail>([]);

  const getNoticeDetail = async () => {
    try {
      const response = await api.notice.getNoticeDetail(id);
      setNoticeDetail(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNoticeDetail();
  }, []);

  useEffect(() => {
    console.log(noticeDetail);
  }, [noticeDetail]);

  return (
    <View>
      <View style={styles.body}>
        <View style={styles.box1}>
          <CommuDetailTitleText
            title={noticeDetail.title}
            subTitle={noticeDetail.userId}
          />
        </View>
        <View style={styles.box2}>
          <ScrollView>
            <Text style={styles.text}>{noticeDetail.content}</Text>
          </ScrollView>
        </View>
        <View style={styles.btns}>
          <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

export default NoticeDetail;
