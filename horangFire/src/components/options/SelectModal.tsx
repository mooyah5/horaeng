import React from 'react';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../api/api_controller';
import {selectUser, setUserPoint} from '../../store/user';
import {font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';
import {setHaveBackground} from '../../store/haveBackground';

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

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Option'>;
  route: any;
}

const SelectModal = ({navigation, route}: Props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const {params} = route;
  const selectedNumber = params.selectedNumber;

  const selectApply = async () => {
    await api.background.buyUserBackground(user.id, selectedNumber);
    const response = await api.background.getUserBackground(user.id);

    const list: number[] = [];
    for (const bg of response.data) {
      list.push(bg.backgroundId);
    }
    dispatch(setHaveBackground(list));

    const user_res = await api.user.getUserInfo(user.id);
    dispatch(setUserPoint({point: user_res.data.point}));

    navigation.goBack();
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
        <Btn txt="성냥 100개" clickEvent={selectApply} />
        <Btn txt="돌아가기" clickEvent={navigation.goBack} />
      </View>
    </View>
  );
};

export default SelectModal;
