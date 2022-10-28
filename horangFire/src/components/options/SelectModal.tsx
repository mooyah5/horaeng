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

const SelectModal = ({navigation}: any) => {
  const selecApply = () => {
    navigation.goBack();
    navigation.navigate('ApplyModal');
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.cardImg}
        source={require('../../assets/image/postBox.png')}
      />
      <View style={styles.section1}>
        <Text style={styles.title}>정말 구매할거야?</Text>
      </View>
      <View style={styles.section2}>
        <Btn txt="1000" clickEvent={selecApply} />
        <Btn txt="돌아가기" clickEvent={navigation.goBack} />
      </View>
    </View>
  );
};

export default SelectModal;
