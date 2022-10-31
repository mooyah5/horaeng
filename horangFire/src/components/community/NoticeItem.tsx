import React from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  table: {},
  text: {
    fontFamily: font.preMid,
    fontSize: 16,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  textLight: {
    fontFamily: font.preReg,
    fontSize: 16,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  textBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
  },
});

const NoticeItem = ({navigation}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.table}
      navigation={navigation}
      onPress={() => navigation.navigate('NoticeDetail')}>
      <View style={styles.textBox}>
        <View>
          <Text style={styles.text}>53</Text>
        </View>
        <View>
          <Text style={styles.text}>[공지] 미션에 맞는 사진을 올...</Text>
        </View>
        <View>
          <Text style={styles.textLight}>관리자1</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoticeItem;
