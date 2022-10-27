import {StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import TitleText from '../../components/common/TitleText';

const styles = StyleSheet.create({
  container: {
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    width: '100%',
    height: '100%',
    backgroundColor: color.BACK_SUB,
    padding: 24,
    paddingTop: 40,
  },
});
const Community_first = () => {
  return (
    <View style={styles.container}>
      <TitleText title="커뮤니티다" subTitle="아래에 작성하세요" />
    </View>
  );
};

export default Community_first;