import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import CommunityTitleText from '../../components/community/CommunityTitleText';
import Btn from '../../components/common/Btn_short';
import CommunityContent from '../../components/community/CommunityContent';

export interface valueType {
  id: number;
  name: string;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  text: {
    fontFamily: font.beeBold,
    fontSize: 100,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 4,
    zIndex: 1,
    paddingTop: 60,
    paddingBottom: 80,
  },
  midTitle: {
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    fontSize: 50,
    paddingBottom: 12,
    paddingTop: 0,
    textAlign: 'center',
  },
  btns: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    alignItems: 'flex-start',
    zIndex: 2,
  },
});

const Community = ({navigation}: any) => {
  const data: valueType[] = [
    {id: 0, name: '전체'},
    {id: 1, name: '벵갈호랑이'},
    {id: 2, name: '펭귄'},
    {id: 3, name: '오목눈이'},
    {id: 4, name: '바다거북'},
    {id: 5, name: '코끼리'},
  ];
  // const [isNotice, setIsNotice] = useState(false);

  const [selectedItem, setSelectedItem] = useState<valueType>(data[0]);

  useEffect(() => {
    navigation.navigate('Community');
  }, [selectedItem]);

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/image/commuBack.png')}>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.box1}>
            <CommunityTitleText
              navigation={navigation}
              title="Community"
              value={selectedItem}
              data={data}
              onSelect={setSelectedItem}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.midTitle}>{selectedItem.name}</Text>
            <CommunityContent navigation={navigation} />
          </View>
          <View style={styles.btns}>
            <Btn txt="이전으로" clickEvent={() => navigation.goBack()} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Community;
