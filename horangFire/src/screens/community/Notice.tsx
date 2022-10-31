import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_short';
import CommunityTitleText from '../../components/community/CommunityTitleText';
import NoticeItem from '../../components/community/NoticeItem';

export interface valueType {
  id: number;
  name: string;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: font.preMid,
    fontSize: 16,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  textLight: {
    fontFamily: font.preReg,
    fontSize: 16,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
    padding: 40,
    paddingTop: 40,
    paddingBottom: 90,
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 3,
  },
  midTitle: {
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    fontSize: 50,
    padding: 24,
    paddingTop: 0,
    textAlign: 'center',
  },
  btns: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    flex: 1,
    alignItems: 'flex-start',
    // zIndex: 1,
  },
  tableBox: {
    flex: 1,
  },
  table: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
});

const Notice = ({navigation}: any) => {
  const route = useRoute();

  const data: valueType[] = [
    {id: 0, name: '전체'},
    {id: 1, name: '뱅갈호랑이'},
    {id: 2, name: '펭귄'},
    {id: 3, name: '오목눈이'},
    {id: 4, name: '바다거북'},
    {id: 5, name: '코끼리'},
  ];

  const [selectedItem, setSelectedItem] = useState<valueType>(data[0]);
  const [noticeData, setNoticeData] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

  // useEffect(()=> {
  //   if (route.name === 'Notice'){}
  // }, [])

  return (
    <ImageBackground source={require('../../assets/image/commuBack.png')}>
      <View>
        <View style={styles.body}>
          <View style={styles.box1}>
            <CommunityTitleText
              navigation={navigation}
              title="Community"
              value={selectedItem}
              data={data}
              onSelect={setSelectedItem}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.midTitle}>공지사항</Text>
            <FlatList
              style={styles.tableBox}
              data={noticeData}
              renderItem={item => <NoticeItem navigation={navigation} />}
              key={null}
              // columnWrapperStyle={styles.flatList}
            />
          </View>
          <View style={styles.btns}>
            <Btn
              txt="이전으로"
              clickEvent={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Notice;
