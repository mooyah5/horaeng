import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import api from '../../api/api_controller';
import {selectCharId} from '../../store/character';
import Btn from '../common/Btn_short';
import DiaryItem from './DiaryItem';

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
  section3: {flex: 4, flexDirection: 'row', paddingHorizontal: 24},

  scroll: {flex: 1, marginBottom: 60},

  subSection1: {flex: 1, height: '100%', backgroundColor: 'red'},
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
    width: '100%',
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 20,
  },
  emptyArea: {flex: 2},
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'ListOfDiaries'>;
}

const ListOfDiaries = ({navigation}: Props) => {
  const [diaries, setDiaries] = useState([]);
  // const charId = useSelector(selectCharId);
  const charId = 1;

  const handleDiaries = async () => {
    try {
      const res = await api.diary.viewCharDiary(charId);
      setDiaries(res);
    } catch (err) {
      Alert.alert('오류 발생');
    }
    // setDiaries([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  };

  useEffect(() => {
    handleDiaries();
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
          <View style={styles.diaryBox}>
            <View style={styles.subSection1}>
              {diaries.map((value, index) => {
                if (index % 3 === 0) {
                  return (
                    <DiaryItem
                      day={value}
                      key={index}
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
                      day={value}
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
                      day={value}
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
        </ScrollView>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="창 닫기" clickEvent={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default ListOfDiaries;
