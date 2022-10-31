import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Btn from '../../components/common/Btn_long';
import TitleText from '../../components/common/TitleText';
import {color, font} from '../../styles/colorAndFontTheme';

const styles = StyleSheet.create({
  body: {backgroundColor: color.BACK_SUB, width: '100%', height: '100%'},
  section1: {flex: 4},
  section2: {flex: 9, paddingTop: 30, paddingBsssottom: 20},
  section3: {
    flex: 4,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  section4: {flex: 4, flexDirection: 'row', paddingHorizontal: 30},

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  text: {fontSize: 18, fontFamily: font.beeBold, paddingTop: 5},
});

const CollectionDetail = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1}>
        <TitleText title="[벵갈호랑이]" subTitle="나는 호랭이" />
      </View>
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/PhotoFrame.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.section3}>
        <Image
          source={require('../../assets/image/textBoxBottom.png')}
          style={styles.textBox}
        />
        <Text style={styles.text}>나를 무럭무럭 키워줘서 고마워!</Text>
        <Text style={styles.text}>
          그동안 작성했던 일지와 나에 대해 더 자세히 보여줄게!
        </Text>
      </View>
      <View style={styles.section4}>
        <Btn
          txt="작성 일지 보기"
          clickEvent={() => navigation.navigate('ListOfDiaries')}
        />
        <Btn
          txt="더 알아보기!"
          clickEvent={() => navigation.navigate('InfoOfAnimal')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CollectionDetail;
