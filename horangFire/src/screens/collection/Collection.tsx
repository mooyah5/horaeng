import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Btn from '../../components/common/Btn_short';
import {color, font} from '../../styles/colorAndFontTheme';
import CollectionPhotoFrame from './CollectionPhotoFrame';

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: color.BACK_SUB,
    alignItems: 'center',
  },
  section1: {flex: 1},
  section2: {flex: 4, justifyContent: 'center'},
  section3: {
    flex: 26,
    width: '100%',
    height: '100%',
  },
  section4: {
    flex: 4,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  title: {fontFamily: font.beeBold, fontSize: 60},
  whiteSpace: {flex: 3},
  flatList: {paddingHorizontal: 24},
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Collection'>;
}

const Collection = ({navigation}: Props) => {
  const [data, setData] = useState<number[]>([]);

  const handleData = () => {
    setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Text style={styles.title}>동물 기록 도감</Text>
      </View>
      <View style={styles.section3}>
        <FlatList
          data={data}
          renderItem={() => {
            return <CollectionPhotoFrame navigation={navigation} />;
          }}
          numColumns={3}
          key={null}
          style={styles.flatList}
        />
      </View>
      <View style={styles.section4}>
        <View style={styles.whiteSpace} />
        <Btn txt="이전으로" clickEvent={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

export default Collection;
