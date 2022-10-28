import {StyleSheet, View, Text, Image} from 'react-native';
import {font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';

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

const ApplyModal = ({navigation}: any) => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.cardImg}
        source={require('../../assets/image/postBox.png')}
      />
      <View style={styles.section1}>
        <Text style={styles.title}>잠금이 해제됐어!</Text>
      </View>
      <View style={styles.section2}>
        <Btn txt="닫기" clickEvent={navigation.goBack} />
      </View>
    </View>
  );
};

export default ApplyModal;
