import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {font} from '../../styles/colorAndFontTheme';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import api from '../../api/api_controller';
import Btn from '../common/Btn_short';
import DiaryItem from './DiaryItem';
import {Community} from '../community/CommunityContent';

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
  },
  section1: {flex: 5},
  section2: {flex: 16, paddingHorizontal: 24, paddingTop: 40},
  section3: {flex: 5, flexDirection: 'row', paddingHorizontal: 30},

  scroll: {
    flex: 1,
    marginBottom: 60,
  },

  subSection1: {flex: 1, height: '100%'},
  subSection2: {
    flex: 1,
    height: '100%',
    paddingTop: 50,
  },
  subSection3: {
    flex: 1,
    height: '100%',
  },

  infoBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  diaryBox: {
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyArea: {flex: 2},
  empty: {
    fontFamily: font.beeBold,
    fontSize: 30,
    textAlign: 'center',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'ListOfDiaries'>;
  route: any;
}

const ListOfDiaries = ({navigation, route}: Props) => {
  const [diaries, setDiaries] = useState<Community[]>([]);
  const {params} = route;
  const characterId = params.characterId;

  const getDiaries = async () => {
    const response = await api.diary.getDiaries(characterId);
    if (response.data) {
      setDiaries(response.data);
    }
  };

  useEffect(() => {
    getDiaries();
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/box_large.png')}
          style={styles.infoBox}
        />
        <ScrollView style={styles.scroll}>
          <>
            {diaries.length !== 0 && (
              <View style={styles.diaryBox}>
                <View style={styles.subSection1}>
                  {diaries.map((value, index) => {
                    if (index % 3 === 0) {
                      return (
                        <DiaryItem
                          key={index}
                          day={index}
                          value={value}
                          navigation={navigation}
                        />
                      );
                    } else {
                      return;
                    }
                  })}
                </View>
                <View style={styles.subSection2}>
                  {diaries.map((value, index) => {
                    if (index % 3 === 1) {
                      return (
                        <DiaryItem
                          value={value}
                          day={index}
                          key={index}
                          navigation={navigation}
                        />
                      );
                    } else {
                      return;
                    }
                  })}
                </View>
                <View style={styles.subSection3}>
                  {diaries.map((value, index) => {
                    if (index % 3 === 2) {
                      return (
                        <DiaryItem
                          value={value}
                          day={index}
                          key={index}
                          navigation={navigation}
                        />
                      );
                    } else {
                      return;
                    }
                  })}
                </View>
              </View>
            )}
            {diaries.length === 0 && (
              <Text style={styles.empty}>일지를 작성해 볼까요?</Text>
            )}
          </>
        </ScrollView>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="창 닫기" clickEvent={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default ListOfDiaries;
