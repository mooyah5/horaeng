import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
} from 'react-native';
import {videoList} from '../../script/videoList';
import Btn from '../common/Btn_short';
import {font, color} from '../../styles/colorAndFontTheme';
import {useSelector} from 'react-redux';
import api from '../../api/api_controller';
import {selectUser} from '../../store/user';
const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    // paddingVertical: 40,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {flex: 3},
  section: {flex: 3, alignItems: 'center', justifyContent: 'center'},
  infoBox: {
    width: '90%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  txt: {
    fontFamily: font.beeBold,
    fontSize: 30,
  },
  txt2: {
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.RED,
  },
  btns: {
    // flex: 0.5,
    flexDirection: 'row',
    // marginTop: 15,
  },
  btn: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
interface Props {
  navigation: StackNavigationProp<ParamListBase, 'VideoModal'>;
}

const VideoModal = ({navigation}: Props) => {
  const user = useSelector(selectUser);

  const goTube = async () => {
    // list 개수에 따라 랜덤 개수 조정
    const randomNum = Math.floor(Math.random() * 3);
    try {
      await api.user.addPoint({
        userId: user.id,
        point: 5,
      });
      Linking.openURL(videoList[randomNum]);
    } catch (err) {
      Alert.alert('적립 실패ㅜㅠ');
    }
  };
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.empty} />
      <View style={styles.section}>
        <Image
          source={require('../../assets/image/optionBox.png')}
          style={styles.infoBox}
        />
        <Text style={styles.txt}>버튼을 누르면 영상으로 이동합니다!</Text>
        <Text style={styles.txt2}>
          (영상을 시청하면 5개의 성냥을 드립니다!)
        </Text>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Btn txt="영상 보기" clickEvent={goTube} />
          </View>
          <View style={styles.btn}>
            <Btn txt="창 닫기" clickEvent={navigation.goBack} />
          </View>
        </View>
      </View>
      <View style={styles.empty} />
    </SafeAreaView>
  );
};

export default VideoModal;
