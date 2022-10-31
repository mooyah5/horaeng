import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
  section1: {flex: 5},
  section2: {flex: 16, paddingHorizontal: 24},
  section3: {flex: 4, flexDirection: 'row', paddingHorizontal: 24},

  infoBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  textBox: {
    width: '100%',
    paddingHorizontal: 40,
    alignItems: 'center',
    overflow: 'scroll',
  },
  title: {fontFamily: font.beeBold, fontSize: 40, paddingTop: 40},
  text: {fontFamily: font.beeBold, fontSize: 20, paddingHorizontal: 20},
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});

const InfoOfAnimal = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1}></View>
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/box_large.png')}
          style={styles.infoBox}
        />
        <View style={styles.textBox}>
          <Text style={styles.title}>[벵갈호랑이]</Text>
          <Image
            source={require('../../assets/image/ex_horang.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            벵갈호랑이는 여기저기에 서식하는 친구에요. 이 친구는 이런저런 이유
            때문에 멸종위기종으로 지정됐어요.
          </Text>
        </View>
      </View>
      <View style={styles.section3}>
        <View style={{flex: 2}} />
        <Btn txt="창 닫기" clickEvent={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default InfoOfAnimal;
