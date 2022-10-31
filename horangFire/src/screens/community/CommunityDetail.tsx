import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import CommuDetailTitleText from '../../components/community/CommuDetailTitleText';
import Btn from '../../components/common/Btn_short';
// import ReportModal from '../../components/options/ReportModal';
// import SCREEN_WIDTH from '../../assets/image/constants/index'

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
    // backgroundColor: 'red',
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

const CommunityDetail = ({navigation}: any) => {
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.box1}>
          <CommuDetailTitleText title="제목입니다" subTitle="작성자: 백한나" />
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
            <Text style={styles.text}>
              오늘은 에너지 절약에 관한 기사를 보았다. 기사를 보니 우리가
              아무렇지도 않게 쓰고 있는 에너지가 멸종 위기에 빠진 동물들을 더
              괴롭게 하고 있다는 사실을 알게 되었다. 나는 컴퓨터 전원도 하루
              24시간 켜두고 콘센트 전원도 잘 끄지 않는데…마음이 아팠다ㅠㅠ
              귀여운 동물 오늘은 에너지 절약에 관한 기사를 보았다. 기사를 보니
              우리가 아무렇지도 않게 쓰고 있는 에너지가 멸종 위기에 빠진
              동물들을 더 괴롭게 하고 있다는 사실을 알게 되었다. 나는 컴퓨터
              전원도 하루 24시간 켜두고 콘센트 전원도 잘 끄지 않는데…마음이
              아팠다ㅠㅠ 귀여운 동물 오늘은 에너지 절약에 관한 기사를 보았다.
              기사를 보니 우리가 아무렇지도 않게 쓰고 있는 에너지가 멸종 위기에
              빠진 동물들을 더 괴롭게 하고 있다는 사실을 알게 되었다. 나는
              컴퓨터 전원도 하루 24시간 켜두고 콘센트 전원도 잘 끄지
              않는데…마음이 아팠다ㅠㅠ 귀여운 동물
            </Text>
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
