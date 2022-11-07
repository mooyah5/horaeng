import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import CommuDetailTitleText from '../../components/community/CommuDetailTitleText';
import Btn from '../../components/common/Btn_short';
import api from '../../api/api_controller';
// import ReportModal from '../../components/options/ReportModal';
// import SCREEN_WIDTH from '../../assets/image/constants/index'

export interface valueType {
  id: number;
  name: string;
}

// const source = {
//   'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800',
//   'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800',
//   'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800',
//   'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800',
//   'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800',
//   'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800',
//   'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800'
// }

const styles = StyleSheet.create({
  text: {
    fontFamily: font.beeBold,
    fontSize: 24,
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
    paddingTop: 20,
    // backgroundColor: 'red',
  },
  btns: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
});

interface NoticeDetail {
  id: number;
  userId: string;
  title: string;
  content: string;
  createDate: string;
}

const NoticeDetail = ({navigation}: any) => {
  const [noticeDetail, setNoticeDetail] = useState<NoticeDetail[]>([]);

  const getNoticeDetail = async () => {
    try {
      const response = await api.notice.getNoticeDetail(3);
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
            title="공지 디테일 페이지"
            subTitle="작성자: 백한나"
          />
        </View>
        <View style={styles.box2}>
          <ScrollView>
            <Text style={styles.text}>
              안녕하세요. 최근 미션에 맞지 않는 사진 업로드의 증가로 어쩌구
              저쩌구입니다. 단순 포인트 획득을 위한 사진을 올릴 시 경고 누적
              횟수로 계정 정지될 수 있음을 알려드립니다. 항상 저희 성냥팔이
              호랭이 서비스를 이용해 주셔서 감사합니다.안녕하세요. 최근 미션에
              맞지 않는 사진 업로드의 증가로 어쩌구 저쩌구입니다. 단순 포인트
              획득을 위한 사진을 올릴 시 경고 누적 횟수로 계정 정지될 수 있음을
              알려드립니다. 항상 저희 성냥팔이 호랭이 서비스를 이용해 주셔서
              감사합니다.안녕하세요. 최근 미션에 맞지 않는 사진 업로드의 증가로
              어쩌구 저쩌구입니다. 단순 포인트 획득을 위한 사진을 올릴 시 경고
              누적 횟수로 계정 정지될 수 있음을 알려드립니다. 항상 저희 성냥팔이
              호랭이 서비스를 이용해 주셔서 감사합니다.안녕하세요. 최근 미션에
              맞지 않는 사진 업로드의 증가로 어쩌구 저쩌구입니다. 단순 포인트
              획득을 위한 사진을 올릴 시 경고 누적 횟수로 계정 정지될 수 있음을
              알려드립니다. 항상 저희 성냥팔이 호랭이 서비스를 이용해 주셔서
              감사합니다.
            </Text>
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
