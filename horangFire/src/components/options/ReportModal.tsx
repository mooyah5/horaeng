import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {font, color} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';
import api from '../../api/api_controller';
import {useSelector} from 'react-redux';
import {selectUser, User} from '../../store/user';

interface Report {
  userId: string;
  diaryId: number;
  reportType: string;
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  section1: {alignItems: 'center'},
  section2: {alignItems: 'center', flexDirection: 'row', paddingHorizontal: 40},
  section3: {alignItems: 'center', flexDirection: 'row', paddingHorizontal: 40},

  cardImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
  },
  title: {
    fontFamily: font.beeBold,
    fontSize: 32,
    textAlign: 'center',
    paddingVertical: 24,
  },
  // radio box
  radioBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 15,
  },
  press: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: font.beeBold,
    color: color.BROWN_78,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Community'>;
  id: number;
  route: any;
}

const ReportModal = ({navigation, route}: Props) => {
  const {id} = route.params;
  const user: User = useSelector(selectUser);

  const [inputs, setInputs] = useState<Report>({
    userId: user.id,
    diaryId: id,
    reportType: 'FAIL',
  });

  const HandleRadio = async (itemId: string) => {
    setInputs({
      ...inputs,
      reportType: itemId,
    });
  };

  const ReportHandle = async () => {
    try {
      const response = await api.community.report(inputs);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    navigation.goBack();
    navigation.navigate('ReportApplyModal');
  };

  const data = [
    {
      id: 'FAIL',
      value: '미션 미이행',
    },
    {
      id: 'HARM',
      value: '유해한 게시물',
    },
  ];

  return (
    <View style={styles.body}>
      <Image
        style={styles.cardImg}
        source={require('../../assets/image/postBox.png')}
      />
      <View style={styles.section1}>
        <Text style={styles.title}>신고하기</Text>
      </View>

      {/* 라디오박스 */}
      <View style={styles.section2}>
        <View style={styles.radioBox}>
          {data.map((item, i) => {
            return (
              <Pressable
                style={styles.press}
                key={i}
                onPress={() => HandleRadio(item.id)}>
                {item.id === inputs.reportType ? (
                  <Image
                    style={styles.radio}
                    source={require('../../assets/image/icon/radioChecked.png')}
                  />
                ) : (
                  <Image
                    style={styles.radio}
                    source={require('../../assets/image/icon/radioUnchecked.png')}
                  />
                )}
                <Text style={styles.text}> {item.value}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.section3}>
        <Btn txt="이전으로" clickEvent={navigation.goBack} />
        <Btn txt="제출하기" clickEvent={ReportHandle} />
      </View>
    </View>
  );
};

export default ReportModal;
