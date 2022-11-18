import React, {useEffect} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// import api from '../../api/api_controller';
import {Notice} from './CommunityContent';

const styles = StyleSheet.create({
  table: {
    // width: '90%',
  },
  text: {
    fontFamily: font.preMid,
    fontSize: 16,
    color: color.BLACK_3A,
    textAlign: 'center',
    flex: 1,
  },
  textLight: {
    fontFamily: font.preMid,
    fontSize: 16,
    color: color.BLACK_3A,
    textAlign: 'center',
    flex: 3,
  },
  textBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
    borderBottomColor: color.MODAL_SUB,
    borderBottomWidth: 1,
    width: '100%',
  },
  textTitle: {
    fontFamily: font.preMid,
    fontSize: 16,
    color: color.BLACK_3A,
    flex: 8,
  },
  textBox1: {flex: 2, marginRight: 1},
  textBox2: {flex: 7, marginRight: 1},
  textBox3: {flex: 2, marginLeft: 1},
});

export interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Community'>;
  item: Notice;
}

const NoticeItem = ({navigation, item}: Props) => {
  useEffect(() => {
    console.log('noticeitem', item);
  }, [item]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.table}
      onPress={() => navigation.navigate('NoticeDetail', {id: item.id})}>
      <View style={styles.textBox}>
        <View style={styles.textBox1}>
          <Text style={styles.text}>{item.id}</Text>
        </View>
        <View style={styles.textBox2}>
          <Text style={styles.textTitle} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
        <View style={styles.textBox3}>
          <Text style={styles.textLight} numberOfLines={1}>
            {item.userId}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoticeItem;
