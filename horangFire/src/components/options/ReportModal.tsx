import {StyleSheet, View, Text, Image} from 'react-native';
import {font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';
import RadioBtn from '../community/RadioBtn';

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
});

const ReportModal = ({navigation}: any) => {
  const ReportHandle = () => {
    navigation.goBack();
    navigation.navigate('ReportApplyModal');
  };
  return (
    <View style={styles.body}>
      <Image
        style={styles.cardImg}
        source={require('../../assets/image/postBox.png')}
      />
      <View style={styles.section1}>
        <Text style={styles.title}>신고하기</Text>
      </View>
      <View style={styles.section2}>
        <RadioBtn />
      </View>
      <View style={styles.section3}>
        <Btn txt="이전으로" clickEvent={navigation.goBack} />
        <Btn txt="제출하기" clickEvent={ReportHandle} />
      </View>
    </View>
  );
};

export default ReportModal;
